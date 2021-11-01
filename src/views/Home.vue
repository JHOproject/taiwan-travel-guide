<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <div v-if="cityList">
      <select v-model="selected">
        <option
          v-for="(item, index) in cityList"
          :key="index"
          :value="item.value"
        >
          {{ item.text }}
        </option>
      </select>
    </div>
    <div v-for="(item, index) in list" :key="index">
      {{ item.Name }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { State } from 'vuex-class'
import HelloWorld from '@/components/HelloWorld.vue'

import { ISelect } from '@/models/common/Form'
import { IScenicSpotTourismInfo } from '@/models/tourism'
import { AppModule } from '@/store/modules'
import { IMap } from '@/models/common/Map'

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  @State((state) => state.app.cityList) cityList!: ISelect[]
  @State((state) => state.app.cityScenicSpotMap)
  cityScenicSpotMap!: IMap<IScenicSpotTourismInfo>

  selected = ''
  list: IScenicSpotTourismInfo | null = null

  created() {
    this.selected = this.cityList[0].value
    AppModule.getCityScenicSpotList(this.selected).then(() => {
      this.list = this.cityScenicSpotMap[this.selected]
    })
  }
}
</script>
