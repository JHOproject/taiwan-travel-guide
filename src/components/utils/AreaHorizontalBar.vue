<template>
  <div class="flex justify-center w-10/12 px-16 mx-auto bg-gloomy rounded-xl">
    <div class="chipGroup">
      <Chip
        v-for="(item, index) in areaList"
        :key="index"
        :text="item.text"
        :class="{ active: item.value === $route.query.area }"
        class="text-base hover:bg-emerald hover:text-white mr-1 px-6"
        bgColor="bg-none"
        @click.native="onAreaChange(item.value)"
      ></Chip>
    </div>

    <div class="subBtnGroup">
      <AreaSubBtn
        :list="cityList"
        :active="active"
        class="justify-start"
        hover="hover:bg-white"
        light
        @onClick="onCityChange"
      ></AreaSubBtn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import Chip from '@/components/common/Chip.vue'
import AreaSubBtn from '@/components/common/AreaSubBtn.vue'
import { ISelect } from '@/models/common/FormDTO'

const cityData = require('@/setting/city.json')

@Component({
  components: {
    Chip,
    AreaSubBtn,
  },
})
export default class AreaHorizontalBar extends Vue {
  active = 'north'
  cityList: ISelect[] = []
  areaList: ISelect[] = []

  get isOnHomePage() {
    return this.$route.name === 'OverView'
  }

  created() {
    this.areaList = cityData.areaList
    this.cityList = cityData.levelData[this.active]
  }

  mounted() {
    this.active = <string>this.$route.query.area || 'north'
  }

  onAreaChange(key: string) {
    if (this.active === key) return

    this.active = key
    this.cityList = cityData.levelData[key]
    // if (this.isOnHomePage) {
    //   this.$router.push({ query: { area: key } })
    // } else {
    this.$router.push({
      query: { area: key, city: this.cityList[0]?.value, page: '1' },
    })
    // }

    this.$emit('onAreaChange', { area: key, text: this.cityList[0].text })
  }

  onCityChange(item: ISelect) {
    if (this.$route.query.city === item.value) return

    this.$router.push({
      query: { area: this.active, city: item.value, page: '1' },
    })
    this.$emit('onCityChange', item.text)
  }
}
</script>

<style scoped>
.chipGroup {
  @apply flex flex-wrap w-1/4 border-r-2 border-deepGray py-2;
}
.chipGroup > .active {
  @apply bg-emerald text-white;
}
.subBtnGroup {
  @apply flex justify-center items-center w-3/4;
}
</style>