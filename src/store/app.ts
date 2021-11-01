import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators"
import store from "./index"

import { getCityScenicSpotList } from "@/api/getTourismList"
import { IScenicSpotTourismInfo } from "@/models/tourism"
import { IResponse } from "@/models/common/Response"
import { IMap } from "@/models/common/Map"

@Module({
  namespaced: true,
  dynamic: true,
  store,
  stateFactory: true,
  name: "app",
})
export default class App extends VuexModule {
  cityList = [...require("@/setting/city.json").list]
  cityScenicSpotMap: IMap<IScenicSpotTourismInfo> = {}

  @Mutation
  private SET_MAP({
    key,
    data,
  }: {
    key: string
    data: IScenicSpotTourismInfo
  }) {
    this.cityScenicSpotMap[key] = data
  }

  @Action
  public async getCityScenicSpotList(params: string) {
    return getCityScenicSpotList(params)
      .then(({ status, data }: IResponse<IScenicSpotTourismInfo>) => {
        if (status === 200) {
          this.SET_MAP({ key: params, data })
        } else {
          console.log(data)
        }
      })
      .catch((res) => {
        console.log(res)
      })
  }
}
