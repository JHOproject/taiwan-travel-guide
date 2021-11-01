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
 * 實例請求配置
 */
const instance = axios.create({
  headers: getAuthorizationHeader(),

  // 請求時長
  // timeout: 1000 * 30,

  // 請求的base地址
  baseURL: 'https://ptx.transportdata.tw/MOTC',
})

/**
 * 攔截器
 */
instance.interceptors.request.use(
  config => {
    return config
  },
  error => Promise.reject(error),
)

/**
 * 響應攔截器
 */
instance.interceptors.response.use(
  (response: AxiosResponse<any>): Promise<AxiosResponse<any>> => {
    const res = response
    return Promise.resolve(res)
  },
  (error: any) => {
    return Promise.reject(error)
  },
)

const $axios = instance

export default $axios
