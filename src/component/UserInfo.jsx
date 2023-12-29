import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from '@image/edit_icons.svg'
import { useStore } from 'react-redux'
import { actions } from '../action/action'

const UserInfoStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  .image_con {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-right: 5px;

    .user_image_con {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
      }
    }
  }

  .user_nick_name {
    flex-grow: 100;
    font-size: 14px;
    font-weight: 500;
  }

  .option_con {
    flex-grow: 1;

    button {
      cursor: pointer;
      background: none;
      border: none;
    }
  }
`

function UserInfo(props) {
  const store = useStore()
  const handleOption = (data) => {
    console.log('클릭')
    let isOpen = false
    store.dispatch(actions.setAction({ data: !isOpen, name: 'BOTTOM_SHEET' }))
    store.dispatch(actions.setAction({ data: data, name: 'COMMUNITY_DETAIL' }))
  }

  return (
    <UserInfoStyled>
      <div className="image_con">
        <div className="user_image_con">
          <img src={props.userInfo.user_img_path} alt="" />
        </div>
      </div>
      <div className="user_nick_name">{props.userInfo.nickname}</div>
      <div className="option_con">
        <button
          type="button"
          onClick={() => {
            handleOption(props.userInfo)
          }}
        >
          <img src={Image} alt="" />
        </button>
      </div>
    </UserInfoStyled>
  )
}

UserInfo.propTypes = {
  userInfo: PropTypes.shape({
    nickname: PropTypes.string,
    user_img_path: PropTypes.string,
  }),
}

export default UserInfo
