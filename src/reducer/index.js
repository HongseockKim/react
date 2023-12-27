// 여러 reducer를 사용하는 경우 reducer를 하나로 묶어주는 메소드입니다.
// store에 저장되는 리듀서는 오직 1개입니다.
import { combineReducers } from 'redux'
import { authInfo } from './authReducer'
import { communityReducer } from './communityReducer'
import { commonReducer } from './commonReducer'

const rootReducer = combineReducers({
  authInfo: authInfo.authUserInfo,
  communityList: communityReducer.communityList,
  bottomSheet: commonReducer.bottomSheet,
  setCommunityDetailData: communityReducer.communityDetailData,
})

export default rootReducer
