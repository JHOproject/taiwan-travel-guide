<template>
  <span
    class="
      self-start
      py-2
      px-4
      rounded-full
      text-xs
      font-bold
      cursor-pointer
      transition
      duration-300
      ease-in-out
    "
    :class="bgColor"
    >{{ text || '暫無分類' }}</span
  >
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class Chip extends Vue {
  @Prop() text!: string
  @Prop({ default: 'bg-gray-100' }) bgColor!: string
}
</script>