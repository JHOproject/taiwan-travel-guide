<template>
  <div class="tourism">
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
      <infoCard :list="scenicSpotList"></infoCard>
      <infoCard :list="restaurantList"></infoCard>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import infoCard from '@/components/infoCard.vue'

import {
  getCityRestaurantList,
  getCityScenicSpotList,
} from '@/api/getTourismList'
import {
  IRestaurantInfoItem,
  IScenicSpotTourismItem,
} from '@/models/TourismDTO'
import { ISelect } from '@/models/common/FormDTO'
import { IResponse } from '@/models/common/ResponseDTO'

const cityList = require('@/setting/city.json')

@Component({
  components: {
    infoCard,
  },
})
export default class Tourism extends Vue {
  cityList: ISelect[] = []
  selected = ''
  scenicSpotList: IScenicSpotTourismItem[] = []
  restaurantList: IRestaurantInfoItem[] = []

  created() {
    this.cityList = cityList.list
    this.selected = this.cityList[0].value
    // this.getCityScenicSpotList(this.selected)
    // this.getCityRestaurantList(this.selected)
  }

  getCityScenicSpotList(params: string) {
    if (!params) return
    getCityScenicSpotList(params)
      .then(({ status, data }: IResponse<IScenicSpotTourismItem[]>) => {
        if (status === 200) {
          this.scenicSpotList = data
        } else {
          console.log(data)
        }
      })
      .catch((res) => {
        console.log(res)
      })
  }

  getCityRestaurantList(params: string) {
    if (!params) return
    getCityRestaurantList(params)
      .then(({ status, data }: IResponse<IRestaurantInfoItem[]>) => {
        if (status === 200) {
          this.restaurantList = data
        } else {
          console.log(data)
        }
      })
      .catch((res) => {
        console.log(res)
      })
  }

  onSelectChnage() {
    this.getCityScenicSpotList(this.selected)
  }
}
</script>
