<template>
  <div class="container flex justify-center mx-auto mb-32">
    <InfoCard
      v-for="(item, index) in list"
      :item="item"
      :description="item.Description"
      :classify="item.Class1"
      :subClassify="item.Class2"
      :key="index"
      class="mx-3"
    ></InfoCard>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import TitleBar from '@/components/utils/TitleBar.vue'
import InfoCard from '@/components/common/InfoCard.vue'
import Chip from '@/components/common/Chip.vue'

import { IActivityInfoItem } from '@/models/TourismDTO'

@Component({
  components: { TitleBar, InfoCard, Chip },
})
export default class OverviewActivityBlock extends Vue {
  @Prop() list!: IActivityInfoItem[]
}
</script>