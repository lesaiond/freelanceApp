import styled from "styled-components";
import { colors, colorsDark, newColors } from "../../style/__colors"; // Import colors

const { textColor, } = colors;
const { darkTextColor, darkBgc } = colorsDark;

export const MainPageStyled = styled.div`
  background: ${newColors.bgc};
  color: ${textColor};
  
  .mainContent {
    padding: 1.5vw 6vw;
    h2 {
      font-size: 30px;
      font-style: normal;
      font-weight: 600;
    }
    h3 {
      font-size: 30px;
      font-style: normal;
      font-weight: 500;
      margin-bottom: 20px;
    }

    section {
      margin-bottom: 50px;
    }
    .mainImg {
      img {
        width: 100vw;
        margin: 1.5vw -6vw;
      }
    }
    .services {
      display: flex;
      justify-content: space-between;
      gap: 40px;
      overflow: hidden;
      .service {
        display: flex;
        flex-direction: column-reverse;
        gap: 9px;

        .title {
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
        }
      }
    }
    .globe {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .globeImg {
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
      }
      p {
        margin-top: 40px;
        max-width: 375px;
      }
    }
  }



  &.dark {
    background: ${darkBgc};
    h1 {
      color: ${darkTextColor};
    }
  }
`;
