<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import Header from '@/components/utils/Header.vue'
import Footer from '@/components/utils/Footer.vue'

@Component({
  components: { Header, Footer },
})
export default class OverView extends Vue {}
</script>

<style lang="sass"></style>
