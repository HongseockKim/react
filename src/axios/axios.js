import axios from 'axios'

// axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: 'https://admin.seemple.kr/api',
  withCredentials: true,
  // 여기에 추가적인 설정을 넣을 수 있습니다. 예를 들어, 헤더 설정 등
})

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    // 이곳에서 요청을 가로채 필요한 작업을 수행 할 수 있습니다.
    // 예를 들어, 토큰이 저장되어 있다면 헤더에 설정해줄 수 있습니다.

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    // 이곳에서 서버로부터의 응답을 가로채 필요한 작업을 수행 할 수 있습니다.
    // 예를 들어, 특정 상태 코드에 따라 특정 작업을 수행하도록 설정 가능합니다.
    if (response.status === 200) {
      return response.data
    } else {
      console.log(response.statusText)
    }
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default axiosInstance
