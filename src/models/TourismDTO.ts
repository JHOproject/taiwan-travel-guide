import { IPicture } from './common/PictureDTO'
import { IPosition } from './common/PositionDTO'

/**
 * 觀光景點資料
 */
export interface IScenicSpotInfoItem {
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

/**
 * 觀光餐飲資料
 */
export interface IRestaurantInfoItem {
  ID: string // (String): 餐飲店家代碼 ,
  Name?: string // (String, optional): 餐飲店家名稱 ,
  Description?: string // (String, optional): 店家簡述 ,
  Address?: string // (String, optional): 店家地址 ,
  ZipCode?: string // (String, optional): 郵遞區號 ,
  Phone?: string // (String, optional): 預約電話 ,
  OpenTime?: string // (String, optional): 營業時間 ,
  WebsiteUrl?: string // (String, optional): 店家網站網址 ,
  Picture?: IPicture // (TourismPicture, optional): 店家照片 ,
  Position?: IPosition // (PointType, optional): 店家位置 ,
  Class?: string // (String, optional): 店家分類 ,
  MapUrl?: string // (String, optional): 店家地圖/簡圖介紹網址 ,
  ParkingInfo?: string // (String, optional): 停車資訊 ,
  City?: string // (String, optional): 所屬縣市 ,
  SrcUpdateTime: string // (string): 觀光局檔案更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz) ,
  UpdateTime: string // (string): 本平台資料更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
}

/**
 * 觀光旅宿資料
 */
export interface IHotelInfoItem {
  ID: string // (String): 旅館民宿代碼 ,
  Name?: string // (String, optional): 旅館民宿名稱 ,
  Description?: string // (String, optional): 旅館民宿簡述 ,
  Grade?: string // (String, optional): 觀光旅館星級 ,
  Address?: string // (String, optional): 旅館民宿地址 ,
  ZipCode?: string // (String, optional): 郵遞區號 ,
  Phone?: string // (String, optional): 旅館民宿電話 ,
  Fax?: string // (String, optional): 旅館民宿傳真 ,
  WebsiteUrl?: string // (String, optional): 旅館民宿網站網址 ,
  Picture?: IPicture // (TourismPicture, optional): 旅館民宿照片 ,
  Position?: IPosition // (PointType, optional): 旅館民宿位置 ,
  Class?: string // (String, optional): 旅館民宿分類 ,
  MapUrl?: string // (String, optional): 旅館民宿地點簡圖連結網址 ,
  Spec?: string // (String, optional): 房型、價目及數量說明 ,
  ServiceInfo?: string // (String, optional): 服務內容介紹 ,
  ParkingInfo?: string // (String, optional): 停車資訊 ,
  City?: string // (String, optional): 所屬縣市 ,
  SrcUpdateTime: string // (DateTime): 觀光局檔案更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz) ,
  UpdateTime: string // (DateTime): 本平台資料更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
}

/**
 * 觀光活動資料
 */
export interface IActivityInfoItem {
  ID: string // (String): 活動訊息代碼 ,
  Name?: string // (String, optional): 活動名稱 ,
  Description?: string // (String, optional): 活動簡述 ,
  Particpation?: string // (String, optional): 活動參與對象 ,
  Location?: string // (String, optional): 主要活動地點名稱 ,
  Address?: string // (String, optional): 主要活動地點地址 ,
  Phone?: string // (String, optional): 活動聯絡電話 ,
  Organizer?: string // (String, optional): 活動主辦單位 ,
  StartTime?: string // (string, optional): 活動開始時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz) ,
  EndTime?: string // (string, optional): 活動結束時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz) ,
  Cycle?: string // (String, optional): 週期性活動執行時間 ,
  NonCycle?: string // (String, optional): 非週期性活動執行時間 ,
  WebsiteUrl?: string // (String, optional): 活動網址 ,
  Picture?: IPicture // (TourismPicture, optional): 活動照片 ,
  Position?: IPosition // (PointType, optional): 活動位置 ,
  Class1?: string // (String, optional): 活動分類1 ,
  Class2?: string // (String, optional): 活動分類2 ,
  MapUrl?: string // (String, optional): 活動地圖/簡圖連結網址 ,
  TravelInfo?: string // (String, optional): 交通資訊 ,
  ParkingInfo?: string // (String, optional): 停車資訊 ,
  Charge?: string // (String, optional): 費用標示 ,
  Remarks?: string // (String, optional): 備註(其他活動相關事項) ,
  City?: string // (String, optional): 所屬縣市 ,
  SrcUpdateTime: string // (string): 觀光局檔案更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz
}
