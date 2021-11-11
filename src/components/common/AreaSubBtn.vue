<template>
  <div class="subButtonGroup">
    <Chip
      v-for="(item, index) in list"
      :key="index"
      :text="item.text"
      :class="{ active: item.value === $route.query.city }"
      class="text-base text-dark hover:bg-dark hover:text-white mx-1"
      bgColor="bg-none"
      @click.native="
        $router.push(`/QuickPick?area=${active}&city=${item.value}`)
      "
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