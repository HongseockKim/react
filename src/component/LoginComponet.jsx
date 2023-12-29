import styled from 'styled-components'
import { useStore } from 'react-redux'
import ApiRequest from '../api/apiRequest'
import { jwtDecode } from 'jwt-decode'
import { actions } from '../action/action'
import axiosInstance from '../axios/axios'
import { useNavigate } from 'react-router-dom'

const LoginWrapper = styled.div`
  .inner {
    padding: 10px 0;

    .login_btn {
      margin-top: 50px;
      max-width: 100%;
      width: 100%;
      height: 50px;
      border-radius: 10px;
      border: none;
      font-size: 15px;
      box-shadow: 0 0 10px #ccc;
    }
  }
`

function LoginComponet() {
  const store = useStore()
  const location = useNavigate()

  const handleLoginRequest = () => {
    ApiRequest.loginRequest().then((res) => {
      const userInfo = {
        token: res.data.access_token,
        userInfo: jwtDecode(res.data.access_token),
      }
      store.dispatch(
        actions.setAction({ data: userInfo, name: 'USER_INFO_ADDED' }),
      )
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
      location('/main')
    })
  }

  return (
    <LoginWrapper>
      <div className="inner">
        <button
          className="login_btn"
          type="button"
          onClick={handleLoginRequest}
        >
          로그인
        </button>
      </div>
    </LoginWrapper>
  )
}

export default LoginComponet
