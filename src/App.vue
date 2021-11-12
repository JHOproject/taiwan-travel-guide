<template>
  <div id="app">
    <Header></Header>
    <transition name="page">
      <router-view class="view" />
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

<style lang="css">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}
.view {
  flex-grow: 1;
  min-height: 50%;
}
</style>
