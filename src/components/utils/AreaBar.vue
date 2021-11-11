<template>
  <div class="flex relative">
    <AreaBtn
      v-for="item in imgList"
      :key="item.key"
      :src="item.src"
      :alt="item.alt"
      :class="{ active: item.key === active }"
      class="mr-10"
      @click.native="$emit('onClick', item.key)"
    ></AreaBtn>

    <AreaSubBtn :list="cityList" :active="active"></AreaSubBtn>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import AreaBtn from '@/components/common/AreaBtn.vue'
import AreaSubBtn from '@/components/common/AreaSubBtn.vue'
import TitleBar from '@/components/utils/TitleBar.vue'
import { ISelect } from '@/models/common/FormDTO'

@Component({
  components: {
    AreaBtn,
    AreaSubBtn,
    TitleBar,
  },
})
export default class AreaBar extends Vue {
  @Prop() active!: string
  @Prop() cityList?: ISelect[]

  imgList = [
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

<style scoped>
</style>