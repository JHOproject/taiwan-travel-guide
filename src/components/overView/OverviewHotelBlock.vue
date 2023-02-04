<template>
  <div class="hotelSection">
    <TitleBar
      title="精選住宿"
      subTitle="ACCOMMODATION"
      className="flex flex-col items-center"
    ></TitleBar>
    <div class="container flex justify-center mx-auto my-16">
      <InfoCard
        v-for="(item, index) in list"
        :item="item"
        :description="item.Description"
        :classify="item.Class"
        :key="index"
        :class="{ 'transform translate-y-4': index % 2 !== 0 }"
        datakeyName="HotelName"
        class="mx-3"
        bgColor="bg-gray-200"
      ></InfoCard>
    </div>
    <Chip
      text="更多住宿"
      class="self-center ml-10 text-white"
      bgColor="bg-gradient-green"
      @click.native="$router.push('/Hotel')"
    ></Chip>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import TitleBar from '@/components/utils/TitleBar.vue'
import InfoCard from '@/components/common/InfoCard.vue'
import Chip from '@/components/common/Chip.vue'

import { IHotelInfoItem } from '@/models/TourismDTO'
import { getCityHotelList } from '@/api/getTourismList'
import { IResponse } from '@/models/common/ResponseDTO'
import { ISelect } from '@/models/common/FormDTO'

@Component({
  components: { TitleBar, InfoCard, Chip },
})
export default class OverviewHotelBlock extends Vue {
  @Prop() cityList!: ISelect[]

  hotelIndex = 0
  list: IHotelInfoItem[] = []

  getCityHotelList(params: string, reset = false) {
    if (!params) return

    reset && (this.list = [])
    getCityHotelList(params)
      .then(({ status, data }: IResponse<IHotelInfoItem[]>) => {
        if (status === 200) {
          this.list = this.list
            .concat(
              data
                .filter((x) => !!x.Picture && !!x.Picture.PictureUrl1)
                .slice(0, 4),
            )
            .slice(0, 4)
          this.hotelIndex += 1

          setTimeout(() => {
            if (!this.cityList) return
            this.list.length < 4 &&
              this.cityList[this.hotelIndex] &&
              this.getCityHotelList(this.cityList[this.hotelIndex].value)
          })
        } else {
          console.log(data)
        }
      })
      .catch((res) => {
        console.log(res)
        this.list = []
      })
  }

  getData(reset = false) {
    this.cityList[this.hotelIndex] &&
      this.getCityHotelList(this.cityList[this.hotelIndex].value, reset)
  }

  initIndex() {
    this.hotelIndex = 0
  }
}
</script>

<style scoped>
.hotelSection {
  @apply container flex flex-col mx-auto mb-32 relative;
}
.hotelSection::after {
  content: '';
  display: inline-block;
  margin-bottom: -200px;
  width: 100%;
  height: 80%;
  background: #f6f6f6;
  border-radius: 50% 50% 0px 0px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
}
</style>