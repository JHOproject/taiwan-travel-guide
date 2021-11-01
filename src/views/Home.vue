<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <div v-if="cityList">
      <select v-model="selected" @change="onSelectChnage">
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
      <span>{{ item.Name }}</span>
      <img :src="item.Picture.PictureUrl1" height="80" />
      <img :src="item.Picture.PictureUrl2" height="80" />
      <img :src="item.Picture.PictureUrl3" height="80" />
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
    this.getCityScenicSpotList(this.selected)
  }

  getCityScenicSpotList(params: string) {
    AppModule.getCityScenicSpotList(params).then(() => {
      this.list = this.cityScenicSpotMap[this.selected]
    })
  }

  onSelectChnage() {
    this.getCityScenicSpotList(this.selected)
  }
}
</script>
