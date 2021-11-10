<template>
  <div class="barGroup">
    <img
      src="@/assets/img/utils/back_packer.png"
      alt="背包客"
      class="w-36 h-36 absolute left-10 bottom-3"
    />
    <TitleBar
      title="縣市快選"
      subTitle="Choose Cities"
      class="mr-16"
    ></TitleBar>
    <AreaBtn
      v-for="item in list"
      :key="item.key"
      :src="item.src"
      :alt="item.alt"
      :class="{ active: item.key === active }"
      class="mr-10"
      @click.native="$emit('onClick', item.key)"
    ></AreaBtn>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import AreaBtn from '@/components/common/AreaBtn.vue'
import TitleBar from '@/components/utils/TitleBar.vue'

@Component({
  components: { AreaBtn, TitleBar },
})
export default class AreaBar extends Vue {
  @Prop() active!: string

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

<style scoped>
.barGroup {
  @apply container mx-auto flex justify-center items-center h-72 relative;
}
.barGroup::after {
  content: '';
  display: inline-block;
  margin-left: -100px;
  width: 88%;
  height: 100%;
  background: #f7f7f7;
  border-radius: 0px 0px 136px 0px;
  position: absolute;
  left: 0;
  z-index: -1;
}
</style>