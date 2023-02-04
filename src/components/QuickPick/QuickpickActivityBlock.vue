<template>
  <div class="w-11/12 mx-auto mb-20">
    <div class="mb-8">
      <p class="inline-block text-2xl text-turquoise font-bold">
        {{ cityName }}
      </p>
      <p class="inline-block text-2xl font-bold ml-5">特色活動</p>
    </div>

    <div v-if="list && list.length && endIndex" class="relative">
      <InfoCard
        v-for="(item, index) in list.slice(startIndex, endIndex)"
        :item="item"
        :description="item.Description"
        :classify="item.Class1"
        :subClassify="item.Class2"
        :key="index"
        datakeyName="ActivityName"
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
    <div v-else class="noData block"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import InfoCard from '@/components/common/InfoCard.vue'
import RoundedBtn from '@/components/common/RoundedBtn.vue'

import { IActivityInfoItem } from '@/models/TourismDTO'
import { getCityActivityList } from '@/api/getTourismList'
import { IResponse } from '@/models/common/ResponseDTO'

@Component({
  components: { InfoCard, RoundedBtn },
})
export default class QuickpickActivityBlock extends Vue {
  @Prop({ default: '' }) city!: string
  @Prop({ default: '' }) cityName!: string

  SHOW_COUNT = 10
  startIndex = 0
  endIndex = 0
  list: IActivityInfoItem[] = []

  @Watch('city')
  cityChange() {
    this.init()
    this.getCityActivityList()
  }

  mounted() {
    this.endIndex = this.SHOW_COUNT
    this.getCityActivityList()
  }

  getCityActivityList(params: string = this.city) {
    if (!params) return
    getCityActivityList(params)
      .then(({ status, data }: IResponse<IActivityInfoItem[]>) => {
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
        this.list = []
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