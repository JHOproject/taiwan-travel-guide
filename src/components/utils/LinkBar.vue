<template>
  <div class="linkGroup">
    <router-link to="/ScenicSpot?area=north&city=Taipei&page=1"
      >景點</router-link
    >
    <router-link to="/activity?area=north&city=Taipei&page=1">活動</router-link>
    <router-link to="/restaurant?area=north&city=Taipei&page=1"
      >美食</router-link
    >
    <router-link to="/hotel?area=north&city=Taipei&page=1">住宿</router-link>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component({})
export default class LinkBar extends Vue {}
</script>

<style scoped>
.linkGroup {
  @apply flex justify-center w-full h-24 items-center space-x-8;
}
</style>