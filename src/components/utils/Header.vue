<template>
  <div
    class="
      flex
      justify-between
      items-center
      w-full
      h-24
      px-10
      sticky
      top-0
      z-10
      bg-white
    "
  >
    <div class="w-40 h-10 relative z-20" @click="$router.push({ path: '/' })">
      <img src="@/assets/img/logo.png" alt="" />
    </div>
    <div
      class="
        flex
        justify-center
        items-center
        w-40
        h-8
        relative
        z-20
        rounded-full
        bg-gray-100
      "
    >
      <input
        placeholder="搜尋關鍵字..."
        class="w-full pl-4 bg-transparent border-0 outline-none"
      />
      <img src="" alt="" />
    </div>
    <div
      class="
        flex
        justify-center
        w-full
        h-24
        items-center
        space-x-8
        absolute
        top-0
        left-0
      "
    >
      <router-link to="/ScenicSpot">景點</router-link>
      <router-link to="/restaurant">美食</router-link>
      <router-link to="/hotel">住宿</router-link>
      <router-link to="/activity">活動</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component({})
export default class Header extends Vue {}
</script>

<style lang="sass"></style>
