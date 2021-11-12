<template>
  <div>
    <div class="w-full h-full min-h-full relative">
      <img
        src="@/assets/img/overView/landing.jpg"
        alt="landing"
        class="block w-full"
      />
      <div class="bannerTextSection">
        <p class="text-6xl font-bold mb-8">想去哪裡玩？</p>
        <p class="text-2xl">這裡共有上千個活動及美食等著你去一同體驗</p>
      </div>
    </div>

    <OverviewAreaBlock @onAreaChange="onAreaChange"></OverviewAreaBlock>
    <OverviewScenicBlock
      :cityList="cityList"
      ref="OverviewScenicBlock"
    ></OverviewScenicBlock>
    <OverviewActivityBlock
      :cityList="cityList"
      ref="OverviewActivityBlock"
    ></OverviewActivityBlock>
    <OverviewFoodBlock
      :cityList="cityList"
      ref="OverviewFoodBlock"
    ></OverviewFoodBlock>
    <OverviewHotelBlock
      :cityList="cityList"
      ref="OverviewHotelBlock"
    ></OverviewHotelBlock>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import OverviewAreaBlock from '@/components/overView/OverviewAreaBlock.vue'
import OverviewScenicBlock from '@/components/overView/OverviewScenicBlock.vue'
import OverviewActivityBlock from '@/components/overView/OverviewActivityBlock.vue'
import OverviewFoodBlock from '@/components/overView/OverviewFoodBlock.vue'
import OverviewHotelBlock from '@/components/overView/OverviewHotelBlock.vue'
import { ISelect } from '@/models/common/FormDTO'

const cityData = require('@/setting/city.json')

@Component({
  components: {
    OverviewAreaBlock,
    OverviewScenicBlock,
    OverviewActivityBlock,
    OverviewFoodBlock,
    OverviewHotelBlock,
  },
})
export default class OverView extends Vue {
  active = 'north'
  cityList: ISelect[] = []

  created() {
    !this.$route.query.area &&
      this.$router.push({ query: { area: this.active } })
  }

  mounted() {
    this.cityList = cityData.levelData[this.active]
    this.getData()
  }

  getData(reset = false) {
    reset && this.initIndex()

    setTimeout(() => {
      if (!this.cityList) return
      ;(<OverviewScenicBlock>this.$refs.OverviewScenicBlock).getData(reset)
      ;(<OverviewActivityBlock>this.$refs.OverviewActivityBlock).getData(reset)
      ;(<OverviewFoodBlock>this.$refs.OverviewFoodBlock).getData(reset)
      ;(<OverviewHotelBlock>this.$refs.OverviewHotelBlock).getData(reset)
    })
  }

  onAreaChange(area: string) {
    this.active = area
    this.cityList = cityData.levelData[area]
    this.getData(true)
    ;(<OverviewFoodBlock>this.$refs.OverviewFoodBlock).init()
  }

  initIndex() {
    ;(<OverviewScenicBlock>this.$refs.OverviewScenicBlock).initIndex()
    ;(<OverviewActivityBlock>this.$refs.OverviewActivityBlock).initIndex()
    ;(<OverviewFoodBlock>this.$refs.OverviewFoodBlock).initIndex()
    ;(<OverviewHotelBlock>this.$refs.OverviewHotelBlock).initIndex()
  }
}
</script>

<style scoped>
.bannerTextSection {
  @apply flex flex-col justify-center items-center w-full h-full text-white absolute top-0;
}
</style>
