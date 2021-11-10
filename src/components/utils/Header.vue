<template>
  <div class="navGroup">
    <div
      class="flex w-40 h-10 relative z-20"
      @click="$router.push({ path: '/' })"
    >
      <img src="@/assets/img/utils/logo.png" alt="logo" />
    </div>
    <div class="searchGroup">
      <input
        placeholder="搜尋關鍵字..."
        class="w-full pl-4 bg-transparent border-0 outline-none"
      />
      <img src="" alt="search" />
    </div>
    <LinkBar class="absolute top-0 left-0"></LinkBar>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import LinkBar from '@/components/utils/LinkBar.vue'

@Component({ components: { LinkBar } })
export default class Header extends Vue {}
</script>

<style scope>
.navGroup {
  @apply flex justify-between items-center w-full h-24 px-10  bg-white bg-opacity-75 relative top-0 z-10;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
}
.searchGroup {
  @apply flex justify-center items-center w-40 h-8 rounded-full bg-gray-100 relative z-20;
}
.btnGroup {
  @apply flex justify-center w-full h-24 items-center space-x-8;
}
</style>
