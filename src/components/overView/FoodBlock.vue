<template>
  <div class="foodSection">
    <div>
      <TitleBar
        title="餐飲美食"
        subTitle="TASTY"
        class="ml-10 mb-6 mr-36"
      ></TitleBar>

      <Chip
        text="更多美味"
        class="ml-10 text-white cursor-pointer"
        bgColor="bg-gradient-green"
        @click.native="$router.push('/Restaurant')"
      ></Chip>
    </div>
    <div class="w-4/6 h-72 overflow-hidden">
      <div
        class="
          w-400
          h-72
          transform
          translate-x-0
          transition
          duration-1000
          ease-in-out
        "
        ref="ImageCardSlider"
      >
        <ImageCard
          v-for="(item, index) in list"
          :item="item"
          :key="index"
          class="mr-6"
          ref="ImageCard"
        ></ImageCard>
      </div>
    </div>
    <RoundedBtn
      type="left"
      class="bg-gradient-white absolute top-1/4 left-1/4"
      @click.native.stop="slideTo(0)"
    ></RoundedBtn>
    <RoundedBtn
      type="right"
      class="bg-gradient-green absolute bottom-1/3 right-1/4"
      @click.native.stop="slideTo(1)"
    ></RoundedBtn>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import TitleBar from '@/components/utils/TitleBar.vue'
import ImageCard from '@/components/common/ImageCard.vue'
import Chip from '@/components/common/Chip.vue'
import RoundedBtn from '@/components/common/RoundedBtn.vue'

import { IRestaurantInfoItem } from '@/models/TourismDTO'

@Component({
  components: { TitleBar, ImageCard, Chip, RoundedBtn },
})
export default class FoodBlock extends Vue {
  @Prop({ default: [] }) list!: IRestaurantInfoItem[]
  translateX = 0

  slideTo(director: number) {
    if (!this.$refs.ImageCardSlider || !(<any>this.$refs.ImageCardSlider).style)
      return

    if (director) {
      this.translateX > -2600 && (this.translateX -= 980)
    } else {
      this.translateX < 0 && (this.translateX += 980)
    }

    ;(<any>(
      this.$refs.ImageCardSlider
    )).style.transform = `translateX(${this.translateX}px)`
  }

  init() {
    this.translateX = 0
    this.slideTo(0)
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