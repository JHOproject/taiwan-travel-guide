<template>
  <div class="container flex justify-center mx-auto mb-32">
    <InfoCard
      v-for="(item, index) in list"
      :item="item"
      :description="item.Description"
      :classify="item.Class1"
      :subClassify="item.Class2"
      :key="index"
      datakeyName="ActivityName"
      class="mx-3"
    ></InfoCard>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import TitleBar from '@/components/utils/TitleBar.vue'
import InfoCard from '@/components/common/InfoCard.vue'
import Chip from '@/components/common/Chip.vue'

import { IActivityInfoItem } from '@/models/TourismDTO'
import { ISelect } from '@/models/common/FormDTO'
import { getCityActivityList } from '@/api/getTourismList'
import { IResponse } from '@/models/common/ResponseDTO'

@Component({
  components: { TitleBar, InfoCard, Chip },
})
export default class OverviewActivityBlock extends Vue {
  @Prop() cityList!: ISelect[]

  activityIndex = 0
  list: IActivityInfoItem[] = []

  getCityActivityList(params: string, reset = false) {
    if (!params) return

    reset && (this.list = [])
    getCityActivityList(params)
      .then(({ status, data }: IResponse<IActivityInfoItem[]>) => {
        if (status === 200) {
          this.list = this.list
            .concat(
              data
                .filter((x) => !!x.Picture && !!x.Picture.PictureUrl1)
                .slice(0, 4),
            )
            .slice(0, 4)
          this.activityIndex += 1

          setTimeout(() => {
            if (!this.cityList) return
            this.list.length < 4 &&
              this.cityList[this.activityIndex] &&
              this.getCityActivityList(this.cityList[this.activityIndex].value)
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
    this.cityList[this.activityIndex] &&
      this.getCityActivityList(this.cityList[this.activityIndex].value, reset)
  }

  initIndex() {
    this.activityIndex = 0
  }
}
</script>