<template>
  <div class="container flex justify-center mx-auto mt-32 mb-2">
    <InfoCard
      v-for="(item, index) in list"
      :item="item"
      :description="item.DescriptionDetail"
      :classify="item.Class1"
      :key="index"
      class="mx-3"
    ></InfoCard>
    <div class="flex flex-col">
      <TitleBar
        title="多久沒有<br>出門走走了呢？"
        subTitle="Let’s get out"
        class="ml-10 mb-6"
      ></TitleBar>

      <Chip
        text="更多景點"
        class="mb-5 ml-10 text-white"
        bgColor="bg-gradient-green"
        @click.native="$router.push('/ScenicSpot')"
      ></Chip>
      <Chip
        text="更多 FUNNY"
        class="ml-10 text-white"
        bgColor="bg-gradient-green"
        @click.native="$router.push('/Activity')"
      ></Chip>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import TitleBar from '@/components/utils/TitleBar.vue'
import InfoCard from '@/components/common/InfoCard.vue'
import Chip from '@/components/common/Chip.vue'

import { IScenicSpotInfoItem } from '@/models/TourismDTO'
import { IResponse } from '@/models/common/ResponseDTO'
import { getCityScenicSpotList } from '@/api/getTourismList'
import { ISelect } from '@/models/common/FormDTO'

@Component({
  components: { TitleBar, InfoCard, Chip },
})
export default class OverviewScenicBlock extends Vue {
  @Prop() cityList!: ISelect[]

  scenicSpotIndex = 0
  list: IScenicSpotInfoItem[] = []

  getCityScenicSpotList(params: string, reset = false) {
    if (!params) return

    reset && (this.list = [])
    getCityScenicSpotList(params)
      .then(({ status, data }: IResponse<IScenicSpotInfoItem[]>) => {
        if (status === 200) {
          this.list = this.list
            .concat(
              data
                .filter((x) => !!x.Picture && !!x.Picture.PictureUrl1)
                .slice(0, 3),
            )
            .slice(0, 3)
          this.scenicSpotIndex += 1

          setTimeout(() => {
            if (!this.cityList) return
            this.list.length < 3 &&
              this.cityList[this.scenicSpotIndex] &&
              this.getCityScenicSpotList(
                this.cityList[this.scenicSpotIndex].value,
              )
          })
        } else {
          console.log(data)
        }
      })
      .catch((res) => {
        console.log(res)
        this.list = []
      })
  }

  getData(reset = false) {
    this.cityList[this.scenicSpotIndex] &&
      this.getCityScenicSpotList(
        this.cityList[this.scenicSpotIndex].value,
        reset,
      )
  }

  initIndex() {
    this.scenicSpotIndex = 0
  }
}
</script>