<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      <span>{{ item.Name }}</span>
      <img :src="item.Picture.PictureUrl1" height="80" />
      <img :src="item.Picture.PictureUrl2" height="80" />
      <img :src="item.Picture.PictureUrl3" height="80" />
    </div>
  </div>
</template>

<script lang="ts">
import { ISelect } from '@/models/common/FormDTO'
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component({})
export default class Card extends Vue {
  @Prop() readonly list!: ISelect[]
}
</script>

<style lang="sass" scoped>
</style>

