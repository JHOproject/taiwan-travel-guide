<template>
  <div class="home">
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

import { ISelect } from '@/models/common/FormDTO'
import { IScenicSpotTourismRes } from '@/models/TourismDTO'
import { IMap } from '@/models/common/MapDTO'
import { TourismModule } from '@/store/modules'

@Component({
  components: {
    HelloWorld,
  },
})
  @State((state) => state.tourism.cityList) cityList!: ISelect[]
  @State((state) => state.tourism.cityScenicSpotMap)
  cityScenicSpotMap!: IMap<IScenicSpotTourismRes>

export default class Tourism extends Vue {
  selected = ''
  list: IScenicSpotTourismRes | null = null

  created() {
    this.selected = this.cityList[0].value
    this.getCityScenicSpotList(this.selected)
  }

  getCityScenicSpotList(params: string) {
    if (!params) return
    TourismModule.getCityScenicSpotList(params).then(() => {
      this.list = this.cityScenicSpotMap[this.selected]
    })
  }

  onSelectChnage() {
    this.getCityScenicSpotList(this.selected)
  }
}
</script>
