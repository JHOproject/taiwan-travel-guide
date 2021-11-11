<template>
  <div class="hotelSection">
    <TitleBar
      title="精選住宿"
      subTitle="ACCOMMODATION"
      className="flex flex-col items-center"
    ></TitleBar>
    <div class="container flex justify-center mx-auto my-16">
      <InfoCard
        v-for="(item, index) in list"
        :item="item"
        :description="item.Description"
        :classify="item.Class"
        :key="index"
        :class="{ 'transform translate-y-4': index % 2 !== 0 }"
        class="mx-3"
        bgColor="bg-gray-200"
      ></InfoCard>
    </div>
    <Chip
      text="更多住宿"
      class="self-center ml-10 text-white"
      bgColor="bg-gradient-green"
      @click.native="$router.push('/Hotel')"
    ></Chip>
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
export default class HotelBlock extends Vue {
  @Prop({ default: [] }) list!: IActivityInfoItem[]
}
</script>

<style scoped>
.hotelSection {
  @apply container flex flex-col mx-auto mb-32 relative;
}
.hotelSection::after {
  content: '';
  display: inline-block;
  margin-bottom: -200px;
  width: 100%;
  height: 80%;
  background: #f6f6f6;
  border-radius: 50% 50% 0px 0px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
}
</style>