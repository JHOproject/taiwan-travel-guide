<template>
  <div class="container mx-auto flex space-x-10">
    <p class="text-2xl font-bold">縣市快選</p>
    <AreaBtn
      v-for="item in list"
      :key="item.key"
      :src="item.src"
      :alt="item.alt"
    ></AreaBtn>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import AreaBtn from '@/components/common/AreaBtn.vue'

@Component({
  components: { AreaBtn },
})
export default class AreaBar extends Vue {
  list = [
    { key: 'north', src: require('@/assets/img/utils/north.png'), alt: '北部' },
    { key: 'mid', src: require('@/assets/img/utils/mid.png'), alt: '中部' },
    { key: 'south', src: require('@/assets/img/utils/south.png'), alt: '南部' },
    { key: 'east', src: require('@/assets/img/utils/east.png'), alt: '東部' },
    {
      key: 'island',
      src: require('@/assets/img/utils/island.png'),
      alt: '離島',
    },
  ]
}
</script>