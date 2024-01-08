import styled from "styled-components";
import { newColors } from "../../style/__colors";

export const StyledCompamiesContainer = styled.div`
  .companie {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 12px 16px 14px 20px;
    .info {
      display: flex;
      gap: 23px;
      align-self: center;
      img {
        border-radius: 20px;
        width: 80px;
        height: 40px;
      }
      .name {
        font-family: RocknRoll One;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
      }
      .location {
        font-family: RocknRoll One;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
      }
    }
    .actions {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .more {
        cursor: pointer;
        text-align: center;
        padding: 3px 33px 6px 33px;
        border-radius: 5px; 
        box-shadow: 2.5px 4px 8px 0px rgba(0, 0, 0, 0.25), 2.5px 2.5px 8px 0px #CECECE inset; 
      }
      .remove {
        cursor: pointer;
        padding: 3px 33px 6px 33px;
        border-radius: 5px; 
        color: ${newColors.bgc};
        background: ${newColors.red};
      }
    }
  }
`;
