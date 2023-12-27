import ComunityListStyled from '../style/ComunityListStyled'
import ApiRequest from '../api/apiRequest'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useStore } from 'react-redux'
import UserInfo from './UserInfo'

function ComunityList() {
  const store = useStore()
  const history = useNavigate()
  const communityListItem = useSelector((state) => state.communityList)
  const userInfo = useSelector((state) => state.authInfo)
  const loadCommunityList = () => {
    const param = {
      meeting: false,
      offset: 1,
      order_by: 'all',
      upvote: false,
    }
    ApiRequest.communityRequst(param)
  }
  useEffect(() => {
    if (userInfo.token) {
      loadCommunityList()
    }
  }, [userInfo.token])

  const handleLocationDetail = (data) => {
    console.log(data)
    if (data.type === 'open') {
      history(`/product/${data.c_post_info_id}`)
    } else {
      history(`/product/${data.c_post_info_id}/${data.c_info_id}`)
    }
  }

  return (
    <ComunityListStyled>
      <ul className="community_list">
        {communityListItem ? (
          communityListItem.map((item, idx) => {
            return (
              <li
                className="community_list_item"
                key={idx}
                onClick={() => handleLocationDetail(item)}
              >
                <UserInfo userInfo={item} />
                <div className="item_title">
                  {item.type !== 'open' && (
                    <span className="bage">{item.category_name}</span>
                  )}
                  <div className="title">{item.title}</div>
                  <div className="content">{item.content}</div>
                </div>
              </li>
            )
          })
        ) : (
          <li>출력 리스트가 없습니다.</li>
        )}
      </ul>
    </ComunityListStyled>
  )
}

export default ComunityList
