<template>
  <div class="linkGroup">
    <router-link
      to="/scenicSpot?area=north&city=Taipei&page=1"
      class="transition duration-300 hover:text-turquoise"
      :class="{ active: needActiveSet && $route.name === 'ScenicSpot' }"
      >景點</router-link
    >
    <router-link
      to="/activity?area=north&city=Taipei&page=1"
      class="transition duration-300 hover:text-turquoise"
      :class="{ active: needActiveSet && $route.name === 'Activity' }"
      >活動</router-link
    >
    <router-link
      to="/restaurant?area=north&city=Taipei&page=1"
      class="transition duration-300 hover:text-turquoise"
      :class="{ active: needActiveSet && $route.name === 'Restaurant' }"
      >美食</router-link
    >
    <router-link
      to="/hotel?area=north&city=Taipei&page=1"
      class="transition duration-300 hover:text-turquoise"
      :class="{ active: needActiveSet && $route.name === 'Hotel' }"
      >住宿</router-link
    >
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component({})
export default class LinkBar extends Vue {
  @Prop({ default: false }) activeSet?: boolean | string | undefined

  get needActiveSet() {
    return typeof this.activeSet === 'string' || !!this.activeSet
  }
}
</script>

<style scoped>
.linkGroup {
  @apply flex justify-center w-full h-24 items-center space-x-8;
}
.linkGroup > .active {
  @apply text-turquoise border-b-2;
}
</style>