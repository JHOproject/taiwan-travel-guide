<template>
  <div class="container flex justify-center mx-auto mt-32 mb-8">
    <InfoCard
      v-for="(item, index) in list"
      :item="item"
      :description="item.DescriptionDetail"
      :classify="item.Class1"
      :key="index"
      class="mx-3"
    ></InfoCard>
    <div class="flex flex-col">
      <TitleBar
        title="多久沒有<br>出門走走了呢？"
        subTitle="Let’s get out"
        class="ml-10 mb-6"
      ></TitleBar>

      <Chip
        text="更多景點"
        class="self-start mb-5"
        className="bg-gradient-green text-white ml-10"
      ></Chip>
      <Chip
        text="更多 FUNNY"
        class="self-start"
        className="bg-gradient-green text-white ml-10"
      ></Chip>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import TitleBar from '@/components/utils/TitleBar.vue'
import InfoCard from '@/components/common/InfoCard.vue'
import Chip from '@/components/common/Chip.vue'

import { IScenicSpotInfoItem } from '@/models/TourismDTO'

@Component({
  components: { TitleBar, InfoCard, Chip },
})
export default class ScenicBlock extends Vue {
  @Prop({ default: [] }) list!: IScenicSpotInfoItem[]
}
</script>