/**
 * 公共自行車即時車位資料
 */
export interface IBikeInfoItem {
  StationUID?: string // (String, optional): 站點唯一識別代碼，規則為 {業管機關代碼} + {StationID}，其中 {業管機關代碼} 可於Authority API中的AuthorityCode欄位查詢 ,
  StationID?: string // (String, optional): 站點代碼 ,
  ServiceStatus?: number // (Int32, optional): 服務狀態 : [0:'停止營運',1:'正常營運',2:'暫停營運'] ,
  ServiceType?: number // (Int32, optional): 服務類型 : [1:'YouBike1.0',2:'YouBike2.0'] ,
  AvailableRentBikes?: number // (Int32, optional): 可租借車數 ,
  AvailableReturnBikes?: number // (Int32, optional): 可歸還車數 ,
  SrcUpdateTime?: string // (string, optional): 來源端平台資料更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz) ,
  UpdateTime: string // (DateTime): 資料更新日期時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
}

/**
 * 自行車道路網圖資料
 */
export interface IBikeCyclingItem {
  RouteName: string // (String): 路線名稱 ,
  AuthorityName?: string // (String, optional): 業管機關名稱（可能包含多個業管機關） ,
  CityCode: string // (String): 路線所在縣市代碼 ,
  City: string // (String): 路線所在縣市名稱 ,
  Town?: string // (String, optional): 路線所在鄉鎮名稱（可能包含多個鄉鎮） ,
  RoadSectionStart?: string // (String, optional): 路線起點描述 ,
  RoadSectionEnd?: string // (String, optional): 路線迄點描述 ,
  Direction?: string // (String, optional): 自行車道車行方向 ,
  CyclingType?: string // (String, optional): 自行車道類型 ,
  CyclingLength?: number // (number, optional): 自行車道長度 ,
  FinishedTime?: string // (String, optional): 自行車道完工日期時間 ,
  UpdateTime: string // (DateTime): 資料更新日期時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz) ,
  Geometry: string // (String): well-known text，為路線軌跡資料 ,
  EncodedPolyline: string // (String): 路線軌跡編碼(encoded polyline)
}
