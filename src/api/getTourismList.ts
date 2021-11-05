import { $axios, $linkAxios } from '@/plugins/axios'

/**
 * 取得縣市資料
 * @returns
 */
export const getCityList = (query: string = '') => {
  return $linkAxios.get('/v2/Basic/City' + query)
}

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

/**
 * 取得指定[縣市]觀光餐飲資料
 * @param params city
 * @returns
 */
export const getCityRestaurantList = (params: string, query: string = '') => {
  return $axios.get(`/v2/Tourism/Restaurant/${params}` + query)
}

/**
 * 取得指定[縣市]觀光旅宿資料
 * @param params city
 * @returns
 */
export const getCityHotelList = (params: string, query: string = '') => {
  return $axios.get(`/v2/Tourism/Hotel/${params}` + query)
}

/**
 * 取得指定[縣市]觀光活動資料
 * @param params city
 * @returns
 */
export const getCityActivityList = (params: string, query: string = '') => {
  return $axios.get(`/v2/Tourism/Activity/${params}` + query)
}
