import api from './api'
import { actions } from '../action/action'
import store from '../store/store'

class ApiRequest {
  static async getCommunityDetailRequest(param) {
    try {
      const data = await api.communityDetail(param)
      return data
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  static async loginRequest() {
    try {
      const data = await api.loginTest()
      return data
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  static async communityRequst(param) {
    try {
      const data = await api.communityList(param)

      if (data.code === 200) {
        console.log(data)
        store.dispatch(
          actions.setAction({
            data: data.data.community_post_list,
            name: 'COMMUNITY_ADDED',
          }),
        )
      }
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}

export default ApiRequest
