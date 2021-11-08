<template>
  <div class="buttonGroup">
    <button class="imgWrap rounded-full w-20 h-20 mb-2">
      <img :src="src" :alt="alt" class="w-12 h-12 m-auto" />
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
  @apply flex flex-col justify-center items-center w-28 h-36 pt-5 rounded-2xl shadow-xl cursor-pointer;
}
.imgWrap {
  background: linear-gradient(155.4deg, #78e389 0.2%, #1eb893 90.81%);
}
</style>