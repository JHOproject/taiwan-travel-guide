<template>
  <div class="w-11/12 mx-auto mb-20">
    <div class="mb-8">
      <p class="inline-block text-2xl text-turquoise font-bold">
        {{ cityName }}
      </p>
      <p class="inline-block text-2xl font-bold ml-5">優質住宿</p>
    </div>

    <div v-if="list && endIndex" class="relative">
      <InfoCard
        v-for="(item, index) in list.slice(startIndex, endIndex)"
        :item="item"
        :description="item.Description"
        :classify="item.Class1"
        :subClassify="item.Class2"
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

import { IHotelInfoItem } from '@/models/TourismDTO'
import { getCityHotelList } from '@/api/getTourismList'
import { IResponse } from '@/models/common/ResponseDTO'

@Component({
  components: { InfoCard, RoundedBtn },
})
export default class Quickpick extends Vue {
  @Prop({ default: '' }) city!: string
  @Prop({ default: '' }) cityName!: string

  SHOW_COUNT = 10
  startIndex = 0
  endIndex = 0
  list: IHotelInfoItem[] = []

  @Watch('city')
  cityChange() {
    this.init()
    this.getCityHotelList()
  }

  mounted() {
    this.endIndex = this.SHOW_COUNT
    this.getCityHotelList()
  }

  getCityHotelList(params: string = this.city) {
    if (!params) return
    getCityHotelList(params)
      .then(({ status, data }: IResponse<IHotelInfoItem[]>) => {
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

<style scoped>
.hotelSection {
  @apply container flex flex-col mx-auto mb-32 relative;
}
.hotelSection::after {
  content: '';
  display: inline-block;
  margin-bottom: -200px;
  width: 100%;
  height: 80%;
  background: #f6f6f6;
  border-radius: 50% 50% 0px 0px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
}
</style>