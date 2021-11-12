<template>
  <div class="flex justify-center relative">
    <AreaBtn
      v-for="item in imgList"
      :key="item.key"
      :src="item.src"
      :alt="item.alt"
      :class="{ active: item.key === active }"
      class="mr-10"
      @click.native="onAreaChange(item.key)"
    ></AreaBtn>

    <AreaSubBtn
      :list="cityList"
      :active="active"
      class="justify-center mx-auto absolute -bottom-1/2"
      @onClick="onCityChange"
    ></AreaSubBtn>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import AreaBtn from '@/components/common/AreaBtn.vue'
import AreaSubBtn from '@/components/common/AreaSubBtn.vue'
import TitleBar from '@/components/utils/TitleBar.vue'
import { ISelect } from '@/models/common/FormDTO'

const cityData = require('@/setting/city.json')

@Component({
  components: {
    AreaBtn,
    AreaSubBtn,
    TitleBar,
  },
})
export default class AreaVerticalBar extends Vue {
  active = ''
  cityList: ISelect[] = []

  imgList = [
    { key: 'north', src: require('@/assets/img/utils/north.png'), alt: '北部' },
    { key: 'mid', src: require('@/assets/img/utils/mid.png'), alt: '中部' },
    { key: 'south', src: require('@/assets/img/utils/south.png'), alt: '南部' },
    { key: 'east', src: require('@/assets/img/utils/east.png'), alt: '東部' },
    {
      key: 'island',
      src: require('@/assets/img/utils/island.png'),
      alt: '離島',
    },
  ]

  get isOnHomePage() {
    return this.$route.name === 'OverView'
  }

  mounted() {
    this.active = <string>this.$route.query.area || 'north'
    this.cityList = cityData.levelData[this.active]
  }

  onAreaChange(key: string) {
    if (this.active === key) return

    this.active = key
    this.cityList = cityData.levelData[key]
    if (this.isOnHomePage) {
      this.$router.push({ query: { area: key } })
    } else {
      this.$router.push({ query: { area: key, city: this.cityList[0]?.value } })
    }

    this.$emit('onAreaChange', { area: key, text: this.cityList[0].text })
  }

  onCityChange(item: ISelect) {
    if (this.$route.query.city === item.value) return

    this.$router.push(`/QuickPick?area=${this.active}&city=${item.value}`)
    this.$emit('onCityChange', item.text)
  }
}
</script>

<style scoped>
</style>