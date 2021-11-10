<template>
  <div v-if="item" class="infoCardGroup">
    <div class="h-48 bg-gray-100 relative overflow-hidden">
      <img
        :src="item.Picture.PictureUrl1"
        :alt="item.Picture.PictureDescription1"
        class="w-full min-h-full max-w-none fitImg"
      />
    </div>
    <div class="py-4 px-4">
      <p class="font-bold">
        {{ item.Name.length > 10 ? item.Name.slice(0, 9) + '...' : item.Name }}
      </p>
      <p class="text-xs text-gray-400">
        {{
          description.length > 30
            ? description.slice(0, 29) + ' ...'
            : description
        }}
      </p>
    </div>
    <div class="flex justify-between items-center px-4 pb-4">
      <Chip :text="classify"></Chip>
      <Chip v-if="subClassify" :text="subClassify"></Chip>
      <span class="text-sm text-blue font-bold">{{ item.City }}</span>
    </div>
  </div>
</template>    

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import Chip from '@/components/common/Chip.vue'

import { IScenicSpotInfoItem } from '@/models/TourismDTO'

@Component({ components: { Chip } })
export default class InfoCard extends Vue {
  @Prop() readonly item!: IScenicSpotInfoItem
  @Prop() readonly description!: string
  @Prop() readonly classify!: string
  @Prop({ default: '' }) readonly subClassify?: string
}
</script>

<style scoped>
.infoCardGroup {
  @apply w-64 rounded-xl shadow-xl opacity-80 overflow-hidden cursor-pointer transition duration-300 ease-in-out hover:opacity-100;
}
</style>

