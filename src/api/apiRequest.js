import api from './api'

class ApiRequest {
  static async getCommunityOpenDetailRequest(param) {
    try {
      const data = await api.communityOpenDetail(param)
      return data
    } catch (err) {
      console.log(err)
      throw err
    }
  }

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
      return data
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}

export default ApiRequest
