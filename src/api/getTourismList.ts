import $axios from '@/plugins/axios'

/**
 * 取得所有觀光景點資料
 * @returns
 */
export const getScenicSpotList = (query: string = '') => {
  return $axios.get('/v2/Tourism/ScenicSpot' + query)
}

/**
 * 取得指定[縣市]觀光景點資料
 * @param params city
 * @returns
 */
export const getCityScenicSpotList = (params: string, query: string = '') => {
  return $axios.get(`/v2/Tourism/ScenicSpot/${params}` + query)
}
