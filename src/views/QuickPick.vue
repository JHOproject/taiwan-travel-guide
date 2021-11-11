<template>
  <div class="container mx-auto">
    <img
      src="@/assets/img/utils/pick_banner.png"
      alt="landing"
      class="block w-screen"
    />

    <div class="flex flex-col justify-center items-center mb-32">
      <TitleBar title="縣市快選" class="mx-auto mt-20 mb-12"></TitleBar>

      <AreaBar
        :active="active"
        :cityList="cityList"
        @onClick="onClickArea"
      ></AreaBar>
    </div>

    <div class="w-11/12 mx-auto">
      <div class="mb-8">
        <p class="inline-block text-2xl text-turquoise font-bold">台北市</p>
        <p class="inline-block text-2xl font-bold ml-5">景點介紹</p>
      </div>

      <div class="relative">
        <InfoCard
          v-for="(item, index) in scenicSpotList"
          :item="item"
          :description="item.DescriptionDetail"
          :classify="item.Class1"
          :key="index"
          class="mx-3"
        ></InfoCard>
        <RoundedBtn
          type="left"
          class="bg-gradient-white absolute top-1/2 left-0"
          @click.native.stop="slideTo(0)"
        ></RoundedBtn>
        <RoundedBtn
          type="right"
          class="bg-gradient-green absolute top-1/2 right-0"
          @click.native.stop="slideTo(1)"
        ></RoundedBtn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import TitleBar from '@/components/utils/TitleBar.vue'
import AreaBar from '@/components/utils/AreaBar.vue'
import InfoCard from '@/components/common/InfoCard.vue'
import RoundedBtn from '@/components/common/RoundedBtn.vue'

import { ISelect } from '@/models/common/FormDTO'
import { IScenicSpotInfoItem } from '@/models/TourismDTO'
import { IResponse } from '@/models/common/ResponseDTO'
import { getCityScenicSpotList } from '@/api/getTourismList'

const cityData = require('@/setting/city.json')

@Component({
  components: { TitleBar, AreaBar, InfoCard, RoundedBtn },
})
export default class QuickPick extends Vue {
  active = 'north'
  cityList: ISelect[] = []
  scenicSpotList: IScenicSpotInfoItem[] = []
  startIndex = 0
  endIndex = 0

  get city(): string {
    return <string>this.$route.query.city || ''
  }

  @Watch('city')
  cityChange(val: string) {
    this.getData()
  }

  mounted() {
    this.cityList = cityData.levelData[this.active]
    this.getData()
  }

  getCityScenicSpotList(params: string) {
    if (!params) return
    getCityScenicSpotList(params)
      .then(({ status, data }: IResponse<IScenicSpotInfoItem[]>) => {
        if (status === 200) {
          this.scenicSpotList = data
            .sort((a, b) => {
              return !!a.Picture?.PictureUrl1 && !b.Picture?.PictureUrl1
                ? -1
                : !a.Picture?.PictureUrl1 && !!b.Picture?.PictureUrl1
                ? 1
                : 0
            })
            .slice(0, 5)
        } else {
          console.log(data)
        }
      })
      .catch((res) => {
        console.log(res)
      })
  }

  getData() {
    this.getCityScenicSpotList(this.city)
  }

  slideTo() {}

  onClickArea(key: string) {
    this.active = key
    this.cityList = cityData.levelData[key]
    this.$router.push({ query: { area: key, city: this.cityList[0]?.value } })
  }
}
</script>
