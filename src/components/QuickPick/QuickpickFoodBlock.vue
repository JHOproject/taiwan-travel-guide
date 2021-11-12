<template>
  <div class="w-11/12 mx-auto mb-20">
    <div class="mb-8">
      <p class="inline-block text-2xl text-turquoise font-bold">
        {{ cityName }}
      </p>
      <p class="inline-block text-2xl font-bold ml-5">餐飲美食</p>
    </div>

    <div
      v-if="list && list.length && endIndex"
      class="w-11/12 mx-auto relative"
    >
      <ImageCard
        v-for="(item, index) in list.slice(startIndex, endIndex)"
        :item="item"
        :key="index"
        class="mx-3"
        ref="ImageCard"
      ></ImageCard>
      <RoundedBtn
        type="left"
        class="bg-gradient-white absolute top-32 -left-5"
        @click.native.stop="slideTo(SHOW_COUNT * -1)"
      ></RoundedBtn>
      <RoundedBtn
        type="right"
        class="bg-gradient-green absolute top-32 right-7"
        @click.native.stop="slideTo(SHOW_COUNT)"
      ></RoundedBtn>
    </div>
    <div v-else class="noData block"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import ImageCard from '@/components/common/ImageCard.vue'
import RoundedBtn from '@/components/common/RoundedBtn.vue'

import { IRestaurantInfoItem } from '@/models/TourismDTO'
import { getCityRestaurantList } from '@/api/getTourismList'
import { IResponse } from '@/models/common/ResponseDTO'

@Component({
  components: { ImageCard, RoundedBtn },
})
export default class QuickpickFoodBlock extends Vue {
  @Prop({ default: '' }) city!: string
  @Prop({ default: '' }) cityName!: string

  SHOW_COUNT = 10
  startIndex = 0
  endIndex = 0
  list: IRestaurantInfoItem[] = []

  @Watch('city')
  cityChange() {
    this.init()
    this.getCityRestaurantList()
  }

  mounted() {
    this.endIndex = this.SHOW_COUNT
    this.getCityRestaurantList()
  }

  getCityRestaurantList(params: string = this.city) {
    if (!params) return
    getCityRestaurantList(params)
      .then(({ status, data }: IResponse<IRestaurantInfoItem[]>) => {
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
.foodSection {
  @apply container flex flex-nowrap justify-center mx-auto mb-32 py-20 relative;
}
.foodSection::after {
  content: '';
  display: inline-block;
  margin-left: -100px;
  width: 50%;
  height: 100%;
  background: #f7f7f7;
  border-radius: 0px 242px 242px 0px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>