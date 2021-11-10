<template>
  <div :class="className">
    <p class="mb-2 text-3xl font-bold whitespace-pre-wrap" v-html="title"></p>
    <p class="text-base text-gray-400">{{ subTitle }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class TitleBar extends Vue {
  @Prop({ default: '' }) readonly className?: string
  @Prop() readonly title!: string
  @Prop() readonly subTitle!: string
}
</script>

<style scoped>
</style>