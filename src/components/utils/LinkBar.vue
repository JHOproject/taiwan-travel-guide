<template>
  <div class="linkGroup">
    <router-link to="/ScenicSpot">景點</router-link>
    <router-link to="/activity">活動</router-link>
    <router-link to="/restaurant">美食</router-link>
    <router-link to="/hotel">住宿</router-link>
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