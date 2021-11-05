import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import store from './index'

import { getCityList, getCityScenicSpotList } from '@/api/getTourismList'
import { IResponse } from '@/models/common/ResponseDTO'
import { IMap } from '@/models/common/MapDTO'

/**
 * 使用方式 TourismModule.getCityScenicSpotList(params)
 */
@Module({
  namespaced: true,
  dynamic: true,
  store,
  stateFactory: true,
  name: 'tourism',
})
export default class Tourism extends VuexModule {}
