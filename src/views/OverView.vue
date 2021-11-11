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

    <OverviewAreaBlock @onAreaChange="onAreaChange"></OverviewAreaBlock>
    <OverviewScenicBlock :list="scenicSpotList"></OverviewScenicBlock>
    <OverviewActivityBlock :list="activityList"></OverviewActivityBlock>
    <OverviewFoodBlock
      :list="restaurantList"
      ref="OverviewFoodBlock"
    ></OverviewFoodBlock>
    <OverviewHotelBlock :list="hotelList"></OverviewHotelBlock>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import OverviewAreaBlock from '@/components/overView/OverviewAreaBlock.vue'
import OverviewScenicBlock from '@/components/overView/OverviewScenicBlock.vue'
import OverviewActivityBlock from '@/components/overView/OverviewActivityBlock.vue'
import OverviewFoodBlock from '@/components/overView/OverviewFoodBlock.vue'
import OverviewHotelBlock from '@/components/overView/OverviewHotelBlock.vue'

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
import { ISelect } from '@/models/common/FormDTO'

const cityData = require('@/setting/city.json')

@Component({
  components: {
    OverviewAreaBlock,
    OverviewScenicBlock,
    OverviewActivityBlock,
    OverviewFoodBlock,
    OverviewHotelBlock,
  },
})
export default class OverView extends Vue {
  active = 'north'
  cityList: ISelect[] = []

  scenicSpotIndex = 0
  restaurantIndex = 0
  hotelIndex = 0
  activityIndex = 0

  scenicSpotList: IScenicSpotInfoItem[] = []
  restaurantList: IRestaurantInfoItem[] = []
  hotelList: IHotelInfoItem[] = []
  activityList: IActivityInfoItem[] = []

  created() {
    !this.$route.query.area &&
      this.$router.push({ query: { area: this.active } })
  }

  mounted() {
    this.cityList = cityData.levelData[this.active]
    this.getData()
  }

  getCityScenicSpotList(params: string, reset = false) {
    if (!params) return

    reset && (this.scenicSpotList = [])
    getCityScenicSpotList(params)
      .then(({ status, data }: IResponse<IScenicSpotInfoItem[]>) => {
        if (status === 200) {
          this.scenicSpotList = this.scenicSpotList
            .concat(
              data
                .filter((x) => !!x.Picture && !!x.Picture.PictureUrl1)
                .slice(0, 3),
            )
            .slice(0, 3)
          this.scenicSpotIndex += 1

          setTimeout(() => {
            if (!this.cityList) return
            this.scenicSpotList.length < 3 &&
              this.cityList[this.scenicSpotIndex] &&
              this.getCityScenicSpotList(
                this.cityList[this.scenicSpotIndex].value,
              )
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
          this.restaurantList = this.restaurantList
            .concat(
              data
                .filter((x) => !!x.Picture && !!x.Picture.PictureUrl1)
                .slice(0, 16),
            )
            .slice(0, 16)
          this.restaurantIndex += 1

          setTimeout(() => {
            if (!this.cityList) return
            this.restaurantList.length < 16 &&
              this.cityList[this.restaurantIndex] &&
              this.getCityRestaurantList(
                this.cityList[this.restaurantIndex].value,
              )
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
          this.hotelList = this.hotelList
            .concat(
              data
                .filter((x) => !!x.Picture && !!x.Picture.PictureUrl1)
                .slice(0, 4),
            )
            .slice(0, 4)
          this.hotelIndex += 1

          setTimeout(() => {
            if (!this.cityList) return
            this.hotelList.length < 4 &&
              this.cityList[this.hotelIndex] &&
              this.getCityHotelList(this.cityList[this.hotelIndex].value)
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
          this.activityList = this.activityList
            .concat(
              data
                .filter((x) => !!x.Picture && !!x.Picture.PictureUrl1)
                .slice(0, 4),
            )
            .slice(0, 4)
          this.activityIndex += 1

          setTimeout(() => {
            if (!this.cityList) return
            this.activityList.length < 4 &&
              this.cityList[this.activityIndex] &&
              this.getCityHotelList(this.cityList[this.activityIndex].value)
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
      if (!this.cityList) return
      this.cityList[this.scenicSpotIndex] &&
        this.getCityScenicSpotList(
          this.cityList[this.scenicSpotIndex].value,
          reset,
        )

      this.cityList[this.restaurantIndex] &&
        this.getCityRestaurantList(
          this.cityList[this.restaurantIndex].value,
          reset,
        )

      this.cityList[this.hotelIndex] &&
        this.getCityHotelList(this.cityList[this.hotelIndex].value, reset)

      this.cityList[this.activityIndex] &&
        this.getCityActivityList(this.cityList[this.activityIndex].value, reset)
    })
  }

  onAreaChange(area: string) {
    this.active = area
    this.cityList = cityData.levelData[area]
    this.getData(true)
    ;(<OverviewFoodBlock>this.$refs.OverviewFoodBlock).init()
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
