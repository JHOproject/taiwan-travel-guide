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
        :city="city"
        @onAreaChange="onAreaChange"
        @onCityChange="onCityChange"
      ></AreaBar>
    </div>

    <QuickpickScenicBlock
      :city="city"
      :cityName="cityName"
    ></QuickpickScenicBlock>

    <QuickpickActivityBlock
      :city="city"
      :cityName="cityName"
    ></QuickpickActivityBlock>

    <QuickpickFoodBlock :city="city" :cityName="cityName"></QuickpickFoodBlock>

    <QuickpickHotelBlock
      :city="city"
      :cityName="cityName"
    ></QuickpickHotelBlock>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import TitleBar from '@/components/utils/TitleBar.vue'
import AreaBar from '@/components/utils/AreaBar.vue'
import InfoCard from '@/components/common/InfoCard.vue'
import RoundedBtn from '@/components/common/RoundedBtn.vue'

import QuickpickScenicBlock from '@/components/QuickPick/QuickpickScenicBlock.vue'
import QuickpickActivityBlock from '@/components/QuickPick/QuickpickActivityBlock.vue'
import QuickpickFoodBlock from '@/components/QuickPick/QuickpickFoodBlock.vue'
import QuickpickHotelBlock from '@/components/QuickPick/QuickpickHotelBlock.vue'

import { ISelect } from '@/models/common/FormDTO'

const cityData = require('@/setting/city.json')

@Component({
  components: {
    TitleBar,
    AreaBar,
    InfoCard,
    RoundedBtn,
    QuickpickScenicBlock,
    QuickpickActivityBlock,
    QuickpickFoodBlock,
    QuickpickHotelBlock,
  },
})
export default class QuickPick extends Vue {
  cityName = ''
  cityList: ISelect[] = []

  get area(): string {
    return <string>this.$route.query.area || ''
  }
  get city(): string {
    return <string>this.$route.query.city || ''
  }

  mounted() {
    this.cityList = cityData.levelData[this.area]
    this.cityName = this.cityList.find((x) => x.value === this.city)?.text || ''
  }

  onAreaChange({ text }: { text: string }) {
    this.cityName = text
  }

  onCityChange(text: string) {
    this.cityName = text
  }
}
</script>
