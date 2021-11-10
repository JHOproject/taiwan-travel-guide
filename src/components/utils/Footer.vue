<template>
  <div class="w-full h-60 bg-dark">
    <div
      class="container flex flex-col justify-center items-center mx-auto h-full"
    >
      <img
        src="@/assets/img/utils/logo_light.png"
        class="w-40 h-10"
        alt="logo_light"
      />
      <LinkBar class="text-light-grey"></LinkBar>
    </div>
    <p
      class="
        w-full
        h-10
        bg-deepDark
        text-deep-grey text-xs text-center
        leading-9
      "
    >
      台灣旅遊景點導覽
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import LinkBar from '@/components/utils/LinkBar.vue'

@Component({
  components: { LinkBar },
})
export default class Footer extends Vue {}
</script>