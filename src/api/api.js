import axiosInstance from '../axios/axios'

export default {
  loginTest() {
    return axiosInstance.post('/login')
  },
  communityList(param) {
    return axiosInstance.post('/community/all/list', param)
  },
  communityDetail(param) {
    return axiosInstance.post('/community/private/detail', param)
  },
  communityOpenDetail(param) {
    return axiosInstance.post('/community/open/detail', param)
  },
}
