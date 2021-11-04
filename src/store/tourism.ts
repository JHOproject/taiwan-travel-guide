import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import store from './index'

import { getCityScenicSpotList } from '@/api/getTourismList'
import { IScenicSpotTourismRes } from '@/models/TourismDTO'
import { IResponse } from '@/models/common/ResponseDTO'
import { IMap } from '@/models/common/MapDTO'

@Module({
  namespaced: true,
  dynamic: true,
  store,
  stateFactory: true,
  name: 'tourism',
})
export default class Tourism extends VuexModule {
  cityList = [...require('@/setting/city.json').list]
  cityScenicSpotMap: IMap<IScenicSpotTourismRes> = {}

  @Mutation
  private SET_MAP({ key, data }: { key: string; data: IScenicSpotTourismRes }) {
    this.cityScenicSpotMap[key] = data
  }

  @Action
  public async getCityScenicSpotList(params: string) {
    return getCityScenicSpotList(params)
      .then(({ status, data }: IResponse<IScenicSpotTourismRes>) => {
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
