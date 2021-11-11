<template>
  <div class="imageCardGroup">
    <div
      class="w-full h-full bg-gray-300 overflow-hidden absolute top-0 left-0"
    >
      <img
        :src="item.Picture.PictureUrl1"
        :alt="item.Picture.PictureDescription1"
        class="h-full min-w-full max-w-none fitImg"
      />
    </div>
    <div class="flex flex-col justify-end w-full h-full p-5 relative z-10">
      <p class="text-white font-bold">{{ item.Name }}</p>
      <div class="flex justify-between items-center">
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
import { IRestaurantInfoItem } from '@/models/TourismDTO'

@Component({
  components: { Chip },
})
export default class ImageCard extends Vue {
  @Prop() readonly item!: IRestaurantInfoItem
}
</script>

<style scoped>
.imageCardGroup {
  @apply inline-block w-56 h-72 rounded-xl shadow-xl opacity-80 overflow-hidden relative cursor-pointer  transition duration-300 ease-in-out hover:opacity-100;
}
</style>