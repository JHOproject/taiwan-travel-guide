import $axios from '@/plugins/axios'

const API = {
  getCityScenicSpotList: '/v2/Tourism/ScenicSpot/',
}

export const getCityScenicSpotList = (params: string) => {
  return $axios.get(API.getCityScenicSpotList + params) // 取得指定[縣市]觀光景點資料
}
