import { useParams } from 'react-router-dom'
import ApiRequest from '../api/apiRequest'
import styled from 'styled-components'
import { useEffect } from 'react'

const ProductWrapper = styled.div`
  .product_inner {
    .top {
      margin-top: 20px;

      .back_btn {
        background: none;
        border: solid 1px #eee;
        padding: 5px;
        cursor: pointer;
      }
    }
  }
`

function ProductDetail() {
  const { postId, productId } = useParams()
  let param = {
    pc_info_id: '',
    pc_post_info_id: '',
  }
  useEffect(() => {
    const fetchData = async () => {
      if (productId && postId) {
        param.pc_info_id = Number(postId)
        param.pc_post_info_id = Number(productId)
      } else {
        param.pc_post_info_id = Number(postId)
        delete param.pc_info_id
      }
      const res = await ApiRequest.getCommunityDetailRequest(param)
      console.log(res)
    }

    fetchData()
  }, [postId, productId])
  return (
    <ProductWrapper>
      <div className="product_inner">
        <div className="top">
          <button
            type="button"
            className="back_btn"
            onClick={() => {
              window.history.back()
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </ProductWrapper>
  )
}

export default ProductDetail
