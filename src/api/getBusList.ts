import { BusReqDTO } from '@/models/BusDTO'
import { $axios } from '@/plugins/axios'

/**
 * 取得指定[縣市]的市區公車路線資料
 * @param params city
 * @returns
 */
export const getBusRouteList = (params: string, query: string = '') => {
  return $axios.get(`/v2/Bus/Route/City/${params}` + query)
}

/**
 * 取得指定[縣市],[路線名稱]預估到站資料[批次更新]
 * @returns
 */
export const getBusEstimatedTimeList = (
  params: BusReqDTO,
  query: string = '',
) => {
  return $axios.get(
    `/v2/Bus/EstimatedTimeOfArrival/City/${params.city}/${params.routeName}` +
      query,
  )
}

/**
 * 取得指定[縣市],[路線名稱]的市區公車顯示用路線站序資料(座標)
 * @returns
 */
export const getBusStopOfRouteList = (
  params: BusReqDTO,
  query: string = '',
) => {
  return $axios.get(
    `/v2/Bus/StopOfRoute/City/${params.city}/${params.routeName}` + query,
  )
}

/**
 * 取得指定[縣市],[路線名稱]的路線資訊(營運業者、車牌號碼、票價)
 * @returns
 */
export const getBusRouteInfoList = (params: BusReqDTO, query: string = '') => {
  return $axios.get(
    `/v2/Bus/Route/City/${params.city}/${params.routeName}` + query,
  )
}

/**
 * 取得指定[縣市],[路線名稱]的市區公車路線班表資料
 * @returns
 */
export const getBusScheduleList = (params: BusReqDTO, query: string = '') => {
  return $axios.get(
    `/v2/Bus/Schedule/City/${params.city}/${params.routeName}` + query,
  )
}
