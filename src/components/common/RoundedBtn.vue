<template>
  <button class="btnWrap">
    <img
      v-if="type === 'left'"
      src="@/assets/img/utils/left_btn.png"
      alt="left"
      class="inline-block w-1/3"
    />
    <img
      v-if="type === 'right'"
      src="@/assets/img/utils/right_btn.png"
      alt="left"
      class="inline-block w-1/3"
    />
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class RoundedBtn extends Vue {
  @Prop() type!: string
}
</script>

<style scoped>
/* slider-btn */

/* Ellipse 47 */
.btnWrap {
  @apply flex justify-center items-center self-start inline-block w-16 h-16 rounded-full shadow-xl transform transition duration-300 ease-in-out hover:scale-125;
}
</style>