<template>
  <div class="container mx-auto">
    <p class="text-3xl font-bold mt-20 w-10/12 mx-auto">餐飲美食</p>
    <AreaHorizontalBar
      class="my-12"
      @onAreaChange="onAreaChange"
      @onCityChange="onAreaChange"
    ></AreaHorizontalBar>

    <div
      v-if="list && endIndex"
      class="flex flex-wrap justify-center w-10/12 mx-auto"
    >
      <InfoCard
        v-for="(item, index) in list.slice(startIndex, endIndex)"
        :item="item"
        :description="item.DescriptionDetail"
        :classify="item.Class1"
        :key="index"
        class="mx-3"
      ></InfoCard>
    </div>

    <div
      v-if="list && endIndex"
      class="flex justify-center w-10/12 mx-auto my-12"
    >
      <PaginationBar
        :page="page"
        :totalCount="pageCount"
        @onPageChange="onPageChange"
        ref="PaginationBar"
      ></PaginationBar>
    </div>

    <div></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import InfoCard from '@/components/common/InfoCard.vue'
import AreaHorizontalBar from '@/components/utils/AreaHorizontalBar.vue'
import PaginationBar from '@/components/utils/PaginationBar.vue'

import { getCityRestaurantList } from '@/api/getTourismList'
import { IRestaurantInfoItem } from '@/models/TourismDTO'
import { ISelect } from '@/models/common/FormDTO'
import { IResponse } from '@/models/common/ResponseDTO'

const cityData = require('@/setting/city.json')

@Component({
  components: {
    InfoCard,
    AreaHorizontalBar,
    PaginationBar,
  },
})
export default class Restaurant extends Vue {
  SHOW_COUNT = 12
  startIndex = 0
  endIndex = 0

  areaList: ISelect[] = []
  cityList: ISelect[] = []
  list: IRestaurantInfoItem[] = []

  get area(): string {
    return <string>this.$route.query.area || this.areaList[0]?.value
  }
  get city(): string {
    return <string>this.$route.query.city || this.cityList[0]?.value
  }
  get cityName(): string {
    return this.cityList.find((x) => x.value === this.city)?.text || ''
  }
  get page(): number {
    return +(<string>this.$route.query.page) || 1
  }
  get pageCount(): number {
    return Math.ceil(this.list.length / this.SHOW_COUNT)
  }

  @Watch('city')
  cityChange() {
    this.getCityRestaurantList()
  }
  @Watch('page')
  pageChange(val: number) {
    this.startIndex = (val - 1) * this.SHOW_COUNT
    this.endIndex = this.startIndex + this.SHOW_COUNT
  }

  created() {
    this.areaList = cityData.areaList
    this.cityList = cityData.levelData[this.area]
    ;(!this.$route.query.area ||
      !this.$route.query.city ||
      !this.$route.query.page) &&
      this.$router.push({
        query: {
          area: this.areaList[0]?.value,
          city: this.cityList[0]?.value,
          page: '1',
        },
      })
  }

  mounted() {
    this.startIndex = (this.page - 1) * this.SHOW_COUNT
    this.endIndex = this.startIndex + this.SHOW_COUNT
    this.getCityRestaurantList()
  }

  getCityRestaurantList(params: string = this.city) {
    if (!params) return
    getCityRestaurantList(params)
      .then(({ status, data }: IResponse<IRestaurantInfoItem[]>) => {
        if (status === 200) {
          this.list = data.sort((a, b) => {
            return !!a.Picture?.PictureUrl1 && !b.Picture?.PictureUrl1
              ? -1
              : !a.Picture?.PictureUrl1 && !!b.Picture?.PictureUrl1
              ? 1
              : 0
          })
        } else {
          console.log(data)
        }
      })
      .catch((res) => {
        console.log(res)
      })
  }

  onPageChange(page: number) {
    if (page === +(<string>this.$route.query.page)) return
    this.$router.push({
      query: { area: this.area, city: this.city, page: page + '' },
    })
  }

  onAreaChange() {
    this.cityList = cityData.levelData[this.area]
    ;(<PaginationBar>this.$refs.PaginationBar).init()
  }

  init() {
    this.startIndex = 0
    this.endIndex = this.SHOW_COUNT
  }
}
</script>

