<template>
  <div class="barGroup">
    <img
      src="@/assets/img/utils/back_packer.png"
      alt="背包客"
      class="inline-block w-36 h-36 absolute left-10 bottom-3"
    />
    <TitleBar
      title="縣市快選"
      subTitle="Choose Cities"
      class="mr-16"
    ></TitleBar>
    <AreaBar :city="city" @onAreaChange="onAreaChange"></AreaBar>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import TitleBar from '@/components/utils/TitleBar.vue'
import AreaBar from '@/components/utils/AreaBar.vue'

@Component({
  components: { TitleBar, AreaBar },
})
export default class OverviewAreaBlock extends Vue {
  get city(): string {
    return <string>this.$route.query.city || ''
  }

  onAreaChange({ area }: { area: string }) {
    this.$emit('onAreaChange', area)
  }
}
</script>

<style scoped>
.barGroup {
  @apply container flex justify-center items-center h-80 mx-auto relative;
}
.barGroup::after {
  content: '';
  display: inline-block;
  margin-left: -100px;
  width: 82%;
  height: 100%;
  background: #f7f7f7;
  border-radius: 0px 0px 136px 0px;
  position: absolute;
  left: 0;
  z-index: -1;
}
</style>
