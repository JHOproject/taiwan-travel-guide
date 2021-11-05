<template>
  <div class="bg-black w-full h-full">
    <div v-for="(item, index) in list" :key="index">
      <span>{{ item.Name }}</span>
      <img :src="item.Picture.PictureUrl1" height="80" />
      <img :src="item.Picture.PictureUrl2" height="80" />
      <img :src="item.Picture.PictureUrl3" height="80" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import {
  IRestaurantInfoItem,
  IScenicSpotTourismItem,
} from '@/models/TourismDTO'

@Component({})
export default class Card extends Vue {
  @Prop() readonly list!: IScenicSpotTourismItem[] | IRestaurantInfoItem[]
}
</script>

<style lang="sass" scoped>
</style>

