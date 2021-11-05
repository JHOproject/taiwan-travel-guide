import { $axios } from '@/plugins/axios'

/**
 * 取得動態指定[縣市]的公共自行車即時車位資料
 * @param params city
 * @returns
 */
export const getBikeInfoList = (params: string, query: string = '') => {
  return $axios.get(`/v2/Bike/Availability/${params}` + query)
}

/**
 * 取得指定[位置,範圍]的全臺公共自行車即時車位資料
 * spatialFilter 必填
 * @returns
 */
export const getNearByBikeInfoList = (query: string = '') => {
  return $axios.get('/v2/Bike/Availability/NearBy' + query)
}

/**
 * 取得指定縣市之自行車道路網圖資料
 * @param params City
 * @returns
 */
export const getBikeCyclingList = (params: string, query: string = '') => {
  return $axios.get(`/v2/Cycling/Shape/${params}` + query)
}
