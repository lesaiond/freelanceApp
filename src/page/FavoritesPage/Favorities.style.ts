import styled from "styled-components";

export const StyledFavorities = styled.div`
  display: flex;
  overflow: hidden;
  overflow-x: auto;
  .column {
    position: relative;
    text-align: center;
    flex-direction: column;
    flex: 0 0 auto;
    gap: 15px;
    padding: 20px 45px 20px 20px;
    max-width: 20vw;
    margin: 0px 30px 66px 30px;

    .row {
      justify-content: center;
      svg {
        position: absolute;
        top: 20px;
        right: 10px;
      }
    }
  }
`;
