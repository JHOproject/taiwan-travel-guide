<template>
  <div id="app">
    <Header></Header>
    <transition name="page">
      <router-view />
    </transition>
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
export default class App extends Vue {}
</script>

<style lang="sass"></style>
