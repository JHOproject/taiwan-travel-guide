<template>
  <div class="w-11/12 mx-auto mb-20">
    <div class="mb-8">
      <p class="inline-block text-2xl text-turquoise font-bold">
        {{ cityName }}
      </p>
      <p class="inline-block text-2xl font-bold ml-5">景點介紹</p>
    </div>

    <div class="relative">
      <InfoCard
        v-for="(item, index) in list.slice(startIndex, endIndex)"
        :item="item"
        :description="item.DescriptionDetail"
        :classify="item.Class1"
        :key="index"
        class="mx-3"
      ></InfoCard>
      <RoundedBtn
        type="left"
        class="bg-gradient-white absolute top-32 -left-5"
        @click.native.stop="slideTo(SHOW_COUNT * -1)"
      ></RoundedBtn>
      <RoundedBtn
        type="right"
        class="bg-gradient-green absolute top-32 -right-5"
        @click.native.stop="slideTo(SHOW_COUNT)"
      ></RoundedBtn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import InfoCard from '@/components/common/InfoCard.vue'
import RoundedBtn from '@/components/common/RoundedBtn.vue'

import { IScenicSpotInfoItem } from '@/models/TourismDTO'
import { getCityScenicSpotList } from '@/api/getTourismList'
import { IResponse } from '@/models/common/ResponseDTO'

@Component({
  components: { InfoCard, RoundedBtn },
})
export default class QuickpickScenicBlock extends Vue {
  @Prop({ default: '' }) city!: string
  @Prop({ default: '' }) cityName!: string

  SHOW_COUNT = 5
  startIndex = 0
  endIndex = 0
  list: IScenicSpotInfoItem[] = []

  @Watch('city')
  cityNameChange() {
    this.init()
    this.getCityScenicSpotList()
  }

  mounted() {
    this.endIndex = this.SHOW_COUNT
    this.getCityScenicSpotList()
  }

  getCityScenicSpotList(params: string = this.city) {
    if (!params) return
    getCityScenicSpotList(params)
      .then(({ status, data }: IResponse<IScenicSpotInfoItem[]>) => {
        if (status === 200) {
          this.list = data.sort((a, b) => {
            return !!a.Picture?.PictureUrl1 && !b.Picture?.PictureUrl1
              ? -1
              : !a.Picture?.PictureUrl1 && !!b.Picture?.PictureUrl1
              ? 1
              : 0
          })
        } else {
          console.log(data)
        }
      })
      .catch((res) => {
        console.log(res)
      })
  }

  slideTo(direction: number) {
    if (
      this.startIndex + direction < 0 ||
      this.startIndex + direction >= this.list.length
    )
      return

    this.startIndex += direction
    this.endIndex += direction
  }

  init() {
    this.startIndex = 0
    this.endIndex = this.SHOW_COUNT
  }
}
</script>