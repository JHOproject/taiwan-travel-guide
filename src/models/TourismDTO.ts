import { IPicture } from './common/Picture'
import { IPosition } from './common/Position'

/**
 * 觀光景點資料
 */
export interface IScenicSpotTourismRes {
  ID: string // (String) 景點代碼
  Name?: string // (String, optional) 景點名稱
  DescriptionDetail?: string // (String, optional) 景點特色詳細說明
  Description?: string // (String, optional) 景點特色精簡說明
  Phone?: string // (String, optional) 景點服務電話
  Address?: string // (String, optional) 景點地址
  ZipCode?: string // (String, optional) 郵遞區號
  TravelInfo?: string // (String, optional) 交通資訊
  OpenTime?: string // (String, optional) 開放時間
  Picture?: IPicture // (TourismPicture, optional) 景點照片
  MapUrl?: string // (String, optional) 景點地圖/簡圖介紹網址
  Position?: IPosition // (PointType, optional) 景點位置
  Class1?: string // (String, optional) 景點分類1
  Class2?: string // (String, optional) 景點分類2
  Class3?: string // (String, optional) 景點分類3
  Level?: string // (String, optional) 古蹟分級
  WebsiteUrl?: string // (String, optional) 景點官方網站網址
  ParkingInfo?: string // (String, optional) 停車資訊
  ParkingPosition?: IPosition // (PointType, optional) 景點主要停車場位置
  TicketInfo?: string // (String, optional) 票價資訊
  Remarks?: string // (String, optional) 警告及注意事項
  Keyword?: string // (String, optional) 常用搜尋關鍵字
  City?: string // (String, optional) 所屬縣市
  SrcUpdateTime: string // (DateTime) 觀光局檔案更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
  UpdateTime: string // (DateTime) 本平台資料更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
}
