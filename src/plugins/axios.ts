import axios, { AxiosResponse } from 'axios'
import jsSHA from 'jssha'

type AuthorizationHeader = {
  Authorization: string
  'X-Date': string
}

/**
 * header 請求配置
 */
const getAuthorizationHeader = function (): AuthorizationHeader {
  const AppData = {
    AppID: '0ee7d7a481a74897aa29ebebb88c8971',
    AppKey: 'sgbO2nkXLDNFROH36C86VIlxFs0',
  }

  const GMTString = new Date().toUTCString()
  const ShaObj = new jsSHA('SHA-1', 'TEXT')

  ShaObj.setHMACKey(AppData.AppKey, 'TEXT')
  ShaObj.update('x-date: ' + GMTString)

  const HMAC = ShaObj.getHMAC('B64')
  const Authorization =
    'hmac username="' +
    AppData.AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"'

  return { Authorization: Authorization, 'X-Date': GMTString }
}

/**
 * ptx
 */
const ptxInstance = axios.create({
  // 實例請求配置
  headers: getAuthorizationHeader(),

  // 請求時長
  // timeout: 1000 * 30,

  // 請求的base地址
  baseURL: 'https://ptx.transportdata.tw/MOTC',
})
ptxInstance.interceptors.request.use(
  // 攔截器
  config => {
    return config
  },
  error => Promise.reject(error),
)
ptxInstance.interceptors.response.use(
  // 響應攔截器
  (response: AxiosResponse<any>): Promise<AxiosResponse<any>> => {
    const res = response
    return Promise.resolve(res)
  },
  (error: any) => {
    return Promise.reject(error)
  },
)

/**
 * link
 * TODO: 跨域錯誤
 */
const linkInstance = axios.create({
  headers: getAuthorizationHeader(),
  baseURL: 'https://link.motc.gov.tw',
})
linkInstance.interceptors.request.use(
  config => {
    return config
  },
  error => Promise.reject(error),
)
linkInstance.interceptors.response.use(
  (response: AxiosResponse<any>): Promise<AxiosResponse<any>> => {
    const res = response
    return Promise.resolve(res)
  },
  (error: any) => {
    return Promise.reject(error)
  },
)

const $axios = ptxInstance
const $linkAxios = linkInstance

export { $axios, $linkAxios }
