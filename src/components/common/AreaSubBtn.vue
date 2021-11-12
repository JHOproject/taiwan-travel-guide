<template>
  <div class="subButtonGroup">
    <Chip
      v-for="(item, index) in list"
      :key="index"
      :text="item.text"
      :class="{
        activeDark:
          needActiveSet && !isLightMode && item.value === $route.query.city,
        activeLight:
          needActiveSet && isLightMode && item.value === $route.query.city,
      }"
      :hover="hover"
      class="text-base text-dark mx-1"
      bgColor="bg-none"
      @click.native="$emit('onClick', item)"
    ></Chip>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import Chip from '@/components/common/Chip.vue'
import { ISelect } from '@/models/common/FormDTO'

@Component({
  components: { Chip },
})
export default class AreaSubBtn extends Vue {
  @Prop() list!: ISelect[]
  @Prop() active!: string
  @Prop({ default: false }) light?: boolean | string | undefined
  @Prop({ default: 'hover:bg-dark hover:text-white' }) hover?: string

  get isLightMode() {
    return typeof this.light === 'string' || this.light
  }

  get needActiveSet() {
    return this.$route.name !== 'OverView'
  }
}
</script>

<style scoped>
.subButtonGroup {
  @apply flex;
}
.subButtonGroup > .activeDark {
  @apply bg-dark text-white;
}
.subButtonGroup > .activeLight {
  @apply bg-white;
}
</style>