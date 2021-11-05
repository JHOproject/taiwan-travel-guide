/**
 * 取得公車路線資料
 */
export class BusReqDTO {
  constructor(data: BusReqDTO) {
    if (!data) return
    this.city = data.city
    this.routeName = data.routeName
  }
  city = ''
  routeName = ''
}

/**
 * 市區公車路線資料
 */
export interface IBusRouteItem {
  RouteUID: string // (String): 路線唯一識別代碼，規則為 {業管機關簡碼} + {RouteID}，其中 {業管機關簡碼} 可於Authority API中的AuthorityCode欄位查詢 ,
  RouteID: string // (String): 地區既用中之路線代碼(為原資料內碼) ,
  HasSubRoutes: boolean // (Boolean): 實際上是否有多條附屬路線。(此欄位值與SubRoutes結構並無強烈的絕對關聯。詳細說明請參閱swagger上方的【資料服務使用注意事項】) ,
  Operators: IBusOperatorItem[] // (Array[RouteOperator]): 營運業者 ,
  AuthorityID: string // (String): 業管機關代碼 ,
  ProviderID: string // (String): 資料提供平台代碼 ,
  SubRoutes: IBusSubRouteItem[] // (Array[BusSubRoute], optional): 附屬路線資料(如果原始資料並無提供附屬路線ID，而本平台基於跨來源資料之一致性，會以SubRouteID=RouteID產製一份相對應的附屬路線資料(若有去返程，則會有兩筆)) ,
  BusRouteType: number // (Int32): 公車路線類別 : [11:'市區公車',12:'公路客運',13:'國道客運',14:'接駁車'] ,
  RouteName: IBusNameTypeItem // (NameType): 路線名稱 ,
  DepartureStopNameZh?: string // (String, optional): 起站中文名稱 ,
  DepartureStopNameEn?: string // (String, optional): 起站英文名稱 ,
  DestinationStopNameZh?: string // (String, optional): 終點站中文名稱 ,
  DestinationStopNameEn?: string // (String, optional): 終點站英文名稱 ,
  TicketPriceDescriptionZh?: string // (String, optional): 票價中文敘述 ,
  TicketPriceDescriptionEn?: string // (String, optional): 票價英文敘述 ,
  FareBufferZoneDescriptionZh?: string // (String, optional): 收費緩衝區中文敘述 ,
  FareBufferZoneDescriptionEn?: string // (String, optional): 收費緩衝區英文敘述 ,
  RouteMapImageUrl?: string // (String, optional): 路線簡圖網址 ,
  City?: string // (String, optional): 路線權管所屬縣市(相當於市區公車API的City參數)[若為公路/國道客運路線則為空值] ,
  CityCode?: string // (String, optional): 路線權管所屬縣市之代碼(國際ISO 3166-2 三碼城市代碼)[若為公路/國道客運路線則為空值] ,
  UpdateTime: string // (DateTime): 資料更新日期時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz) ,
  VersionID: number // (Int32): 資料版本編號
}
export interface IBusOperatorItem {
  OperatorID: string //  (String): 營運業者代碼 ,
  OperatorName: IBusNameTypeItem //  (NameType): 營運業者名稱 ,
  OperatorCode: string //  (String): 營運業者簡碼 ,
  OperatorNo: string //  (String): 營運業者編號[交通部票證資料系統定義]
}
export interface IBusSubRouteItem {
  SubRouteUID: string // (String): 附屬路線唯一識別代碼，規則為 {業管機關簡碼} + {SubRouteID}，其中 {業管機關簡碼} 可於Authority API中的AuthorityCode欄位查詢 ,
  SubRouteID: string // (String): 地區既用中之附屬路線代碼(為原資料內碼) ,
  OperatorIDs: string[] // (Array[string]): 營運業者代碼 ,
  SubRouteName: IBusNameTypeItem // (NameType): 附屬路線名稱 ,
  Headsign?: string // (String, optional): 車頭描述 ,
  HeadsignEn?: string // (String, optional): 車頭英文描述 ,
  Direction: number // (Int32): 去返程 : [0:'去程',1:'返程',2:'迴圈',255:'未知'] ,
  FirstBusTime?: string // (String, optional): 平日第一班發車時間 ,
  LastBusTime?: string // (String, optional): 平日返程第一班發車時間 ,
  HolidayFirstBusTime?: string // (String, optional): 假日去程第一班發車時間 ,
  HolidayLastBusTime?: string // (String, optional): 假日返程第一班發車時間
}
export interface IBusNameTypeItem {
  Zh_tw?: string // (String, optional): 中文繁體名稱 ,
  En?: string // (String, optional): 英文名稱
}

/**
 * 預估到站資料[批次更新]
 */
export interface IBusEstimatedTimeItem {
  PlateNumb?: string // (String, optional): 車牌號碼 [値為値為-1時，表示目前該站位無車輛行駛] ,
  StopUID?: string // (String, optional): 站牌唯一識別代碼，規則為 {業管機關簡碼} + {StopID}，其中 {業管機關簡碼} 可於Authority API中的AuthorityCode欄位查詢 ,
  StopID?: string // (String, optional): 地區既用中之站牌代碼(為原資料內碼) ,
  StopName?: IBusNameTypeItem // (NameType, optional): 站牌名 ,
  RouteUID?: string // (String, optional): 路線唯一識別代碼，規則為 {業管機關代碼} + {RouteID}，其中 {業管機關代碼} 可於Authority API中的AuthorityCode欄位查詢 ,
  RouteID?: string // (String, optional): 地區既用中之路線代碼(為原資料內碼) ,
  RouteName?: IBusNameTypeItem // (NameType, optional): 路線名稱 ,
  SubRouteUID?: string // (String, optional): 子路線唯一識別代碼，規則為 {業管機關簡碼} + {SubRouteID}，其中 {業管機關簡碼} 可於Authority API中的AuthorityCode欄位查詢 ,
  SubRouteID?: string // (String, optional): 地區既用中之子路線代碼(為原資料內碼) ,
  SubRouteName?: IBusNameTypeItem // (NameType, optional): 子路線名稱 ,
  Direction: number // (Int32): 去返程(該方向指的是此車牌車輛目前所在路線的去返程方向，非指站站牌所在路線的去返程方向，使用時請加值業者多加注意) : [0:'去程',1:'返程',2:'迴圈',255:'未知'] ,
  EstimateTime?: number // (integer, optional): 到站時間預估(秒) [當StopStatus値為2~4或PlateNumb値為-1時，EstimateTime値為null; 當StopStatus値為1時， EstimateTime値多數為null，僅部分路線因有固定發車時間，故EstimateTime有値; 當StopStatus値為0時，EstimateTime有値。] ,
  StopCountDown?: number // (integer, optional): 車輛距離本站站數 ,
  CurrentStop?: string // (String, optional): 車輛目前所在站牌代碼 ,
  DestinationStop?: string // (String, optional): 車輛目的站牌代碼 ,
  StopSequence?: number // (integer, optional): 路線經過站牌之順序 ,
  StopStatus?: number // (Int32, optional): 車輛狀態備註 : [0:'正常',1:'尚未發車',2:'交管不停靠',3:'末班車已過',4:'今日未營運'] ,
  MessageType?: number // (Int32, optional): 資料型態種類 : [0:'未知',1:'定期',2:'非定期'] ,
  NextBusTime?: string // (string, optional): 下一班公車到達時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz) ,
  IsLastBus?: boolean // (boolean, optional): 是否為末班車 ,
  Estimates: IBusEstimateItem[] // (Array[Estimate], optional): 到站時間預估  ,
  DataTime?: string // (string, optional): 系統演算該筆預估到站資料的時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)[目前僅公總提供此欄位資訊] ,
  TransTime?: string // (string, optional): 車機資料傳輸時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz))[該欄位在N1資料中無意義] ,
  SrcRecTime?: string // (string, optional): 來源端平台接收時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz))[該欄位在N1資料中無意義] ,
  SrcTransTime?: string // (string, optional): 來源端平台資料傳出時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)[公總使用動態即時推播故有提供此欄位, 而非公總系統因使用整包資料更新, 故沒有提供此欄位] ,
  SrcUpdateTime?: string // (string, optional): 來源端平台資料更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)[公總使用動態即時推播故沒有提供此欄位, 而非公總系統因提供整包資料更新, 故有提供此欄] ,
  UpdateTime: string // (DateTime): 本平台資料更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
}
export interface IBusEstimateItem {
  PlateNumb?: string // (String, optional): 車輛車牌號碼 ,
  EstimateTime?: string // (integer, optional): 車輛之到站時間預估(秒) ,
  IsLastBus?: string // (boolean, optional): 是否為末班車 ,
  VehicleStopStatus?: string // (Int32, optional): 車輛於該站之進離站狀態 : [0:'離站',1:'進站']
}

/**
 * 市區公車顯示用路線站序資料(座標)
 */

/**
 * 路線資訊(營運業者、車牌號碼、票價)
 */

/**
 * 市區公車路線班表資料
 */
