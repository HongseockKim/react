import styled from 'styled-components'
import { useSelector, useStore } from 'react-redux'
import { actions } from '../action/action'

const BottomeSheetWrap = styled.div`
  position: fixed;
  bottom: ${(props) => {
    return props.open ? '0' : '-100%'
  }};
  width: 100%;
  height: 100%;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  transition: bottom 0.3s ease-in-out;

  .inner {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 250px;
    background: #fff;
    border-radius: 10px 10px 0 0;
    padding: 50px 10px;

    .btn {
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 10px;
      background: #f3f3f3;
      border-radius: 5px;
    }
  }
`

function BottomSheet() {
  const store = useStore()
  const bottomSheetStore = useSelector((state) => state.bottomSheet)
  const detailData = useSelector((state) => state.setCommunityDetailData)

  console.log(bottomSheetStore)
  console.log(detailData)
  const handleBottomSheet = () => {
    store.dispatch(
      actions.setAction({ data: !bottomSheetStore, name: 'BOTTOM_SHEET' }),
    )
  }

  return (
    <BottomeSheetWrap open={bottomSheetStore} onClick={handleBottomSheet}>
      <div className="inner">
        <span className="btn"></span>
        {detailData.title}
      </div>
    </BottomeSheetWrap>
  )
}

export default BottomSheet
