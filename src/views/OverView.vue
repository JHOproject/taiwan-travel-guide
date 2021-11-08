<template>
  <div>
    <div class="w-full h-full relative">
      <img src="@/assets/img/overView/landing.jpg" alt="" class="w-full" />
      <div class="pGroup">
        <p class="text-6xl font-bold mb-8">想去哪裡玩？</p>
        <p class="text-2xl">這裡共有上千個活動及美食等著你去一同體驗</p>
      </div>
    </div>
    <AreaBar></AreaBar>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import AreaBar from '@/components/utils/AreaBar.vue'

@Component({
  components: { AreaBar },
})
export default class OverView extends Vue {}
</script>

<style scoped>
.pGroup {
  @apply flex flex-col justify-center items-center w-full h-full absolute top-0 text-white;
}
</style>
