<template>
  <div class="subButtonGroup">
    <Chip
      v-for="(item, index) in list"
      :key="index"
      :text="item.text"
      :class="{ active: needActiveSet && item.value === $route.query.city }"
      class="text-base text-dark hover:bg-dark hover:text-white mx-1"
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

  get needActiveSet() {
    return this.$route.name !== 'OverView'
  }
}
</script>

<style scoped>
.subButtonGroup {
  @apply container flex justify-center mx-auto absolute -bottom-1/2;
}
.subButtonGroup > .active {
  @apply bg-dark text-white;
}
</style>