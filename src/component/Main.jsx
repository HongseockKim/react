import ApiRequest from '../api/apiRequest'
import { useSelector, useStore } from 'react-redux'
import { actions } from '../action/action'
import { jwtDecode } from 'jwt-decode'
import WrapperStyled from '../style/Wrapper'
import ComunityList from './ComunityList'
import { useEffect } from 'react'
import axiosInstance from '../axios/axios'
import BottomSheet from './BottomSheet'

function Main() {
  const store = useStore()
  const userInfo = useSelector((state) => state.authInfo)

  const handleLoginRequest = () => {
    ApiRequest.loginRequest().then((res) => {
      const userInfo = {
        token: res.data.access_token,
        userInfo: jwtDecode(res.data.access_token),
      }
      store.dispatch(
        actions.setAction({ data: userInfo, name: 'USER_INFO_ADDED' }),
      )
      console.log('@@@@@@@@@@')
      console.log('@@@@@@@@@@')
      console.log(res)
      console.log('@@@@@@@@@@')
      console.log('@@@@@@@@@@')
      console.log(userInfo)
      axiosInstance.interceptors.request.use(
        (config) => {
          // 요청을 보내기 전에 토큰을 헤더에 추가합니다.
          const token = userInfo.token // Redux state에서 토큰을 가져옵니다.
          if (token) {
            config.headers.Authorization = `Bearer ${token}` // 토큰이 있다면 Authorization 헤더에 추가합니다.
          }
          return config
        },
        (error) => {
          return Promise.reject(error)
        },
      )
    })
  }

  useEffect(() => {}, [userInfo])

  return (
    <WrapperStyled>
      <div className="login_wrap">
        <button
          className="login_btn"
          type="button"
          onClick={handleLoginRequest}
        >
          로그인
        </button>
      </div>
      <ComunityList />
      <BottomSheet />
    </WrapperStyled>
  )
}

export default Main
