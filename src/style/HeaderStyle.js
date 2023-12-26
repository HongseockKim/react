import styled from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #6728ff;

  .logo {
    max-width: 65px;
    width: 100%;

    img {
      width: 100%;
    }
  }

  .nav_el {
    flex-grow: 1;
  }
`;

export default HeaderStyle;