<template>
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import Header from '@/components/utils/Header.vue'

@Component({
  components: { Header },
})
export default class OverView extends Vue {}
</script>

<style lang="sass"></style>
