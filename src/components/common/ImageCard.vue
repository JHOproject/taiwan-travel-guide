<template>
  <div v-if="item" class="imageCardGroup">
    <div
      class="w-full h-full bg-gray-300 overflow-hidden absolute top-0 left-0"
    >
      <img
        v-if="hasImage"
        :src="item.Picture.PictureUrl1"
        :alt="item.Picture.PictureDescription1"
        class="inline-block h-full min-w-full max-w-none"
      />
      <img
        v-else
        alt="無圖片"
        src="@/assets/img/utils/logo.png"
        class="block w-1/2 pt-16 mx-auto"
      />
    </div>
    <div class="flex flex-col justify-end w-full h-full relative z-10">
      <p class="px-5 py-2 text-white font-bold bg-lightDark">
        {{ displayName }}
      </p>
      <div class="flex justify-between items-center px-5 py-2 bg-lightDark">
        <p class="text-xs text-white">
          {{ item.Class || '暫無分類' }}
        </p>
        <Chip :text="item.City" class="text-white" bgColor="bg-black"></Chip>
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

@Component({
  components: { Chip },
})
export default class ImageCard extends Vue {
  @Prop() readonly item!: IScenicSpotInfoItem &
    IRestaurantInfoItem &
    IHotelInfoItem &
    IActivityInfoItem
  @Prop() readonly datakeyName!: DataKeyName

  get hasImage() {
    return !!this.item.Picture && !!this.item.Picture.PictureUrl1
  }

  get dataName() {
    return this.item[this.datakeyName] || ''
  }

  get displayName() {
    return this.dataName?.length > 9
      ? this.dataName?.slice(0, 9) + '...'
      : this.dataName
  }
}
</script>

<style scoped>
.imageCardGroup {
  @apply inline-block w-56 h-72 mb-6 rounded-xl shadow-xl opacity-80 overflow-hidden relative cursor-pointer  transition duration-300 ease-in-out hover:opacity-100;
}
</style>