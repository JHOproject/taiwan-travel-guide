<template>
  <span class="py-2 px-4 rounded-full text-xs font-bold" :class="className">{{
    text
  }}</span>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class Chip extends Vue {
  @Prop() text!: string
  @Prop({ default: 'bg-gray-100' }) className?: string
}
</script>