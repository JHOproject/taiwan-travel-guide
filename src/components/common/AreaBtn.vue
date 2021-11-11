<template>
  <div class="buttonGroup">
    <button class="inline-block w-20 h-20 mb-2 bg-gradient-green rounded-full">
      <img :src="src" :alt="alt" class="inline-block w-12 h-12 m-auto" />
    </button>
    <span>{{ alt }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class AreaBtn extends Vue {
  @Prop() readonly src!: string
  @Prop() readonly alt!: string
}
</script>

<style scoped>
.buttonGroup {
  @apply flex flex-col justify-center items-center w-28 h-36 pt-5 bg-white rounded-2xl shadow-xl cursor-pointer transition duration-300 ease-in-out hover:bg-dark  hover:text-white;
}
.buttonGroup.active {
  @apply bg-dark text-white;
}
</style>