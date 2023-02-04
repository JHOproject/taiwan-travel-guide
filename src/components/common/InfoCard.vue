<template>
  <div v-if="item" class="infoCardGroup">
    <div
      class="h-48 relative overflow-hidden"
      :class="hasImage ? 'bg-gray-100' : 'bg-gray-400'"
    >
      <img
        v-if="hasImage"
        :src="item.Picture.PictureUrl1"
        :alt="item.Picture.PictureDescription1"
        class="inline-block w-full min-h-full max-w-none"
      />
      <img
        v-else
        alt="無圖片"
        src="@/assets/img/utils/logo.png"
        class="block w-1/2 pt-16 mx-auto"
      />
    </div>
    <div class="h-36 flex flex-col justify-between py-4 px-4">
      <div>
        <p class="font-bold">
          {{ displayName }}
        </p>
        <p v-if="description" class="text-xs text-gray-400">
          {{
            description.length > 30
              ? description.slice(0, 29) + ' ...'
              : description
          }}
        </p>
      </div>
      <div class="flex justify-between items-center">
        <Chip :text="classify" :bgColor="bgColor"></Chip>
        <Chip v-if="subClassify" :text="subClassify" :bgColor="bgColor"></Chip>
        <span class="text-sm text-blue font-bold">{{ item.City }}</span>
      </div>
    </div>
  </div>
</template>    

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import Chip from '@/components/common/Chip.vue'

import {
  DataKeyName,
  IActivityInfoItem,
  IHotelInfoItem,
  IRestaurantInfoItem,
  IScenicSpotInfoItem,
} from '@/models/TourismDTO'

@Component({ components: { Chip } })
export default class InfoCard extends Vue {
  @Prop() readonly item!: IScenicSpotInfoItem &
    IRestaurantInfoItem &
    IHotelInfoItem &
    IActivityInfoItem
  @Prop() readonly datakeyName!: DataKeyName
  @Prop() readonly description!: string
  @Prop() readonly classify!: string
  @Prop({ default: '' }) readonly subClassify?: string
  @Prop({ default: 'bg-gray-100' }) readonly bgColor?: string

  get hasImage() {
    return !!this.item.Picture && !!this.item.Picture.PictureUrl1
  }

  get dataName() {
    return this.item[this.datakeyName] || ''
  }

  get displayName() {
    return this.dataName?.length > 12
      ? this.dataName?.slice(0, 11) + '...'
      : this.dataName
  }
}
</script>

<style scoped>
.infoCardGroup {
  @apply inline-block w-64 mb-6 rounded-xl shadow-xl opacity-80 overflow-hidden cursor-pointer transition duration-300 ease-in-out hover:opacity-100;
}
</style>

