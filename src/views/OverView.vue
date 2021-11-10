<template>
  <div>
    <div class="w-full h-full relative">
      <img
        src="@/assets/img/overView/landing.jpg"
        alt="landing"
        class="w-full"
      />
      <div class="landingTextGroup">
        <p class="text-6xl font-bold mb-8">想去哪裡玩？</p>
        <p class="text-2xl">這裡共有上千個活動及美食等著你去一同體驗</p>
      </div>
    </div>

    <AreaBar :active="active" @onClick="onClickArea"></AreaBar>

    <div class="container flex justify-center mx-auto mt-32 mb-8">
      <InfoCard
        v-for="(item, index) in scenicSpotList.slice(0, 3)"
        :item="item"
        :description="item.DescriptionDetail"
        :classify="item.Class1"
        :key="index"
        class="mx-3"
      ></InfoCard>
      <div class="flex flex-col">
        <TitleBar
          title="多久沒有<br>出門走走了呢？"
          subTitle="Let’s get out"
          class="ml-10 mb-6"
        ></TitleBar>

        <Chip
          text="更多景點"
          class="self-start mb-5"
          className="bg-light-green text-white ml-10"
        ></Chip>
        <Chip
          text="更多 FUNNY"
          class="self-start"
          className="bg-light-green text-white ml-10"
        ></Chip>
      </div>
    </div>

    <div class="container flex justify-center mx-auto mb-32">
      <InfoCard
        v-for="(item, index) in activityList.slice(0, 3)"
        :item="item"
        :description="item.Description"
        :classify="item.Class1"
        :subClassify="item.Class2"
        :key="index"
        class="mx-3"
      ></InfoCard>
    </div>

    <div class="imageGroup">
      <div>
        <TitleBar
          title="餐飲美食"
          subTitle="TASTY"
          class="ml-10 mb-6 mr-12"
        ></TitleBar>

        <Chip
          text="更多美味"
          className="ml-10 bg-light-green text-white"
        ></Chip>
      </div>
      <ImageCard
        v-for="(item, index) in restaurantList.slice(0, 4)"
        :item="item"
        :key="index"
        class="mx-3"
      ></ImageCard>
    </div>

    <div class="container flex flex-col mx-auto mb-32">
      <TitleBar
        title="精選住宿"
        subTitle="ACCOMMODATION"
        className="flex flex-col items-center"
      ></TitleBar>
      <div class="container flex justify-center mx-auto my-10">
        <InfoCard
          v-for="(item, index) in hotelList.slice(0, 4)"
          :item="item"
          :description="item.Description"
          :classify="item.Class"
          :key="index"
          class="mx-3"
        ></InfoCard>
      </div>
      <Chip
        text="更多住宿"
        className="self-center ml-10 bg-light-green text-white"
      ></Chip>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import AreaBar from '@/components/utils/AreaBar.vue'
import TitleBar from '@/components/utils/TitleBar.vue'
import InfoCard from '@/components/common/InfoCard.vue'
import ImageCard from '@/components/common/ImageCard.vue'
import Chip from '@/components/common/Chip.vue'
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
  components: { AreaBar, TitleBar, InfoCard, ImageCard, Chip },
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
            data.filter((x) => !!x.Picture && !!x.Picture.PictureUrl1),
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
            this.restaurantList.length < 4 &&
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
  }
}
</script>

<style scoped>
.landingTextGroup {
  @apply flex flex-col justify-center items-center w-full h-full text-white absolute top-0;
}
.imageGroup {
  @apply container flex justify-center relative mx-auto mb-32 py-20;
}
.imageGroup::after {
  content: '';
  display: inline-block;
  margin-left: -100px;
  width: 50%;
  height: 100%;
  background: #f7f7f7;
  border-radius: 0px 242px 242px 0px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
