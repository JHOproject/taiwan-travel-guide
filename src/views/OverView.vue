<template>
  <div>
    <div class="w-full h-full relative">
      <img
        src="@/assets/img/overView/landing.jpg"
        alt="landing"
        class="block w-full"
      />
      <div class="bannerTextSection">
        <p class="text-6xl font-bold mb-8">想去哪裡玩？</p>
        <p class="text-2xl">這裡共有上千個活動及美食等著你去一同體驗</p>
      </div>
    </div>

    <AreaBar :active="active" @onClick="onClickArea"></AreaBar>

    <ScenicBlock :list="scenicSpotList.slice(0, 3)"></ScenicBlock>
    <ActivityBlock :list="activityList.slice(0, 3)"></ActivityBlock>
    <FoodBlock :list="activityList.slice(0, 16)"></FoodBlock>
    <HotelBlock :list="hotelList.slice(0, 4)"></HotelBlock>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import AreaBar from '@/components/utils/AreaBar.vue'
import ScenicBlock from '@/components/overView/ScenicBlock.vue'
import ActivityBlock from '@/components/overView/ActivityBlock.vue'
import FoodBlock from '@/components/overView/FoodBlock.vue'
import HotelBlock from '@/components/overView/HotelBlock.vue'
import {
  getCityActivityList,
  getCityHotelList,
  getCityRestaurantList,
  getCityScenicSpotList,
} from '@/api/getTourismList'
import {
  IActivityInfoItem,
  IHotelInfoItem,
  IRestaurantInfoItem,
  IScenicSpotInfoItem,
} from '@/models/TourismDTO'
import { IResponse } from '@/models/common/ResponseDTO'
import { IMap } from '@/models/common/MapDTO'

const cityData = require('@/setting/city.json')

@Component({
  components: {
    AreaBar,
    ScenicBlock,
    ActivityBlock,
    FoodBlock,
    HotelBlock,
  },
})
export default class OverView extends Vue {
  active = 'north'
  city: IMap<IMap<string>> | null = null

  scenicSpotIndex = 0
  restaurantIndex = 0
  hotelIndex = 0
  activityIndex = 0

  scenicSpotList: IScenicSpotInfoItem[] = []
  restaurantList: IRestaurantInfoItem[] = []
  hotelList: IHotelInfoItem[] = []
  activityList: IActivityInfoItem[] = []

  @Watch('active')
  activeChange(val: string) {
    this.city = cityData.levelData[val]
    this.getData(true)
  }

  mounted() {
    this.city = cityData.levelData[this.active]
    this.getData()
  }

  getCityScenicSpotList(params: string, reset = false) {
    if (!params) return
    reset && (this.scenicSpotList = [])

    getCityScenicSpotList(params)
      .then(({ status, data }: IResponse<IScenicSpotInfoItem[]>) => {
        if (status === 200) {
          this.scenicSpotList = this.scenicSpotList.concat(
            data
              .filter((x) => !!x.Picture && !!x.Picture.PictureUrl1)
              .slice(0, 5),
          )
          this.scenicSpotIndex += 1

          setTimeout(() => {
            if (!this.city) return
            this.scenicSpotList.length < 6 &&
              this.city[this.scenicSpotIndex] &&
              this.getCityScenicSpotList(this.city[this.scenicSpotIndex].value)
          })
        } else {
          console.log(data)
        }
      })
      .catch((res) => {
        console.log(res)
      })
  }

  getCityRestaurantList(params: string, reset = false) {
    if (!params) return
    reset && (this.restaurantList = [])

    getCityRestaurantList(params)
      .then(({ status, data }: IResponse<IRestaurantInfoItem[]>) => {
        if (status === 200) {
          this.restaurantList = this.restaurantList.concat(
            data.filter((x) => !!x.Picture && !!x.Picture.PictureUrl1),
          )
          this.restaurantIndex += 1

          setTimeout(() => {
            if (!this.city) return
            this.restaurantList.length < 20 &&
              this.city[this.restaurantIndex] &&
              this.getCityRestaurantList(this.city[this.restaurantIndex].value)
          })
        } else {
          console.log(data)
        }
      })
      .catch((res) => {
        console.log(res)
      })
  }

  getCityHotelList(params: string, reset = false) {
    if (!params) return
    reset && (this.hotelList = [])

    getCityHotelList(params)
      .then(({ status, data }: IResponse<IHotelInfoItem[]>) => {
        if (status === 200) {
          this.hotelList = this.hotelList.concat(
            data.filter((x) => !!x.Picture && !!x.Picture.PictureUrl1),
          )
          this.hotelIndex += 1

          setTimeout(() => {
            if (!this.city) return
            this.hotelList.length < 4 &&
              this.city[this.hotelIndex] &&
              this.getCityHotelList(this.city[this.hotelIndex].value)
          })
        } else {
          console.log(data)
        }
      })
      .catch((res) => {
        console.log(res)
      })
  }

  getCityActivityList(params: string, reset = false) {
    if (!params) return
    reset && (this.activityList = [])

    getCityActivityList(params)
      .then(({ status, data }: IResponse<IActivityInfoItem[]>) => {
        if (status === 200) {
          this.activityList = this.activityList.concat(
            data.filter((x) => !!x.Picture && !!x.Picture.PictureUrl1),
          )
          this.activityIndex += 1

          setTimeout(() => {
            if (!this.city) return
            this.activityList.length < 4 &&
              this.city[this.activityIndex] &&
              this.getCityHotelList(this.city[this.activityIndex].value)
          })
        } else {
          console.log(data)
        }
      })
      .catch((res) => {
        console.log(res)
      })
  }

  getData(reset = false) {
    reset && this.initIndex()

    setTimeout(() => {
      if (!this.city) return
      this.city[this.scenicSpotIndex] &&
        this.getCityScenicSpotList(this.city[this.scenicSpotIndex].value, reset)
      this.city[this.restaurantIndex] &&
        this.getCityRestaurantList(this.city[this.restaurantIndex].value, reset)
      this.city[this.hotelIndex] &&
        this.getCityHotelList(this.city[this.hotelIndex].value, reset)
      this.city[this.activityIndex] &&
        this.getCityActivityList(this.city[this.activityIndex].value, reset)
    })
  }

  onClickArea(key: string) {
    this.active = key
  }

  initIndex() {
    this.scenicSpotIndex = 0
    this.restaurantIndex = 0
    this.hotelIndex = 0
    this.activityIndex = 0
  }
}
</script>

<style scoped>
.bannerTextSection {
  @apply flex flex-col justify-center items-center w-full h-full text-white absolute top-0;
}
</style>
