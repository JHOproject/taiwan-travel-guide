<template>
  <div>
    <div class="w-full h-full relative">
      <img src="@/assets/img/overView/landing.jpg" alt="" class="w-full" />
      <div class="landingTextGroup">
        <p class="text-6xl font-bold mb-8">想去哪裡玩？</p>
        <p class="text-2xl">這裡共有上千個活動及美食等著你去一同體驗</p>
      </div>
    </div>
    <AreaBar></AreaBar>

    <div class="container mx-auto my-32 flex justify-center">
      <InfoCard class="mx-3"></InfoCard>
      <InfoCard class="mx-3"></InfoCard>
      <InfoCard class="mx-3"></InfoCard>
      <div>
        <TitleBar
          title="多久沒有<br>出門走走了呢？"
          subTitle="Let’s get out"
          class="ml-10"
        ></TitleBar>

        <Chip text="更多FUNNY" className="bg-light-green text-white"></Chip>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import AreaBar from '@/components/utils/AreaBar.vue'
import TitleBar from '@/components/utils/TitleBar.vue'
import InfoCard from '@/components/common/InfoCard.vue'
import Chip from '@/components/common/Chip.vue'

@Component({
  components: { AreaBar, TitleBar, InfoCard, Chip },
})
export default class OverView extends Vue {}
</script>

<style scoped>
.landingTextGroup {
  @apply flex flex-col justify-center items-center w-full h-full text-white absolute top-0;
}
</style>
