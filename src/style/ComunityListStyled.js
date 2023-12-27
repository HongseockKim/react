import styled from 'styled-components'

const ComunityListStyled = styled.div`
  margin-top: 20px;
  cursor: pointer;

  .community_list_item {
    padding-bottom: 20px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    border-bottom: solid 1px #f3f4f7;

    .item_title {
      color: #5d688a;
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;

      .bage {
        display: inline-block;
        border-radius: 6px;
        background: #f3f3f3;
        padding: 4px;
        margin-right: 5px;
      }

      .title {
        color: #000;
      }

      .content {
        margin-top: 10px;
        color: #000;
      }
    }
  }
`
export default ComunityListStyled
