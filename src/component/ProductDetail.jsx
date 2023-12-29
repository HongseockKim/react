import { useLocation, useParams } from 'react-router-dom'
import ApiRequest from '../api/apiRequest'
import styled from 'styled-components'
import { Autoplay } from 'swiper/modules'
import { useEffect, useRef, useState } from 'react'
import UserInfo from './UserInfo'
import { Swiper, SwiperSlide } from 'swiper/react'

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

    .content {
      margin-top: 20px;

      .swiper_wrapper_con {
        margin-top: 50px;
        position: relative;
        width: 100%;
        min-height: 450px;

        .swiper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;

          .swiper_content {
            background: #f8f8f8;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }

      .content_view {
        margin-top: 20px;

        .content_write {
        }
      }
    }
  }
`

function ProductDetail() {
  const location = useLocation()
  const { postId, productId } = useParams()
  const swiperObj = useRef(null)
  const [detailData, setDetailData] = useState({})
  const [imageList, setImageList] = useState([])

  let param = {}
  useEffect(() => {
    const fetchData = async () => {
      console.log(postId)
      console.log(productId)
      if (location.pathname.startsWith('/product/open')) {
        param.oc_info_id = Number(postId)
        param.oc_post_info_id = Number(productId)
        const res = await ApiRequest.getCommunityOpenDetailRequest(param)
        return res
      } else {
        param.pc_info_id = Number(postId)
        param.pc_post_info_id = Number(productId)
        const res = await ApiRequest.getCommunityDetailRequest(param)
        return res
      }
    }

    fetchData().then((res) => {
      setDetailData(res.data.at(0))
      setImageList([...res.data.at(0).file_path_list])
    })
  }, [detailData.current])

  const handleGetSwiper = (swiper) => {
    swiperObj.current = swiper
  }
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
        <div className="content">
          <UserInfo userInfo={detailData} />
          {imageList.length >= 1 && (
            <div className="swiper_wrapper_con">
              <Swiper
                onSwiper={(swiper) => handleGetSwiper(swiper)}
                modules={Autoplay}
                loop={true}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
              >
                {imageList.map((item, idx) => {
                  return (
                    <SwiperSlide className="swiper_content" key={idx}>
                      <img src={item.file_path} alt="" />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          )}
          <div className="content_view">
            <p className="content_write">{detailData.content}</p>
          </div>
        </div>
      </div>
    </ProductWrapper>
  )
}

export default ProductDetail
