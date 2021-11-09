<template>
  <div class="w-64 rounded-xl overflow-hidden">
    <!-- <div v-for="(item, index) in list" :key="index">
      <span>{{ item.Name }}</span>
      <img :src="item.Picture.PictureUrl1" height="80" />
    </div> -->
    <div class="h-48 bg-gray-100">
      <img src="" alt="" />
    </div>
    <div class="py-4 px-4">
      <p class="font-bold">2021大溪豆干節</p>
      <p class="text-xs text-gray-400">花蓮縣壽豐鄉鹽寮村6鄰福德49-2號</p>
    </div>
    <div class="flex px-4 pb-4 justify-between items-center">
      <Chip text="年度"></Chip>
      <span class="text-sm text-blue font-bold">桃園市</span>
    </div>
  </div>
</template>    

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import Chip from '@/components/common/Chip.vue'

import { IRestaurantInfoItem, IScenicSpotInfoItem } from '@/models/TourismDTO'

@Component({ components: { Chip } })
export default class InfoCard extends Vue {
  @Prop() readonly list!: IScenicSpotInfoItem[] | IRestaurantInfoItem[]
}
</script>

<style lang="sass" scoped>
</style>

