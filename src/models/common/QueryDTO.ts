export class RouteQuery {
  constructor(data: RouteQuery) {
    if (!data) return
    Object.keys(data).forEach(key => {
      if (data[key]) this[key] = data[key]
    })
  }
  [index: string]: string | number | (() => string) | undefined
  select? = ''
  filter? = '' // contains(RouteName/Zh_tw,'紅56A')
  orderby? = ''
  top? = 30
  skip? = ''
  spatialFilter? = '' // nearby(25.047675%2C%20121.517055%2C%20100)
  format? = 'JSON'

  getQuery(this: RouteQuery): string {
    return (
      '?' +
      Object.keys(this)
        .map(key => `$${key}=${this[key]}`)
        .join('&')
    )
  }
}
