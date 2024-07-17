import React from "react";
import styled from "styled-components";
import { newColors } from "../../../style/__colors";

const Rating = () => {
  return (
    <StyledRating>
      <div className="userInfo">
        <svg
          className="edit"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
        </svg>
        <span className="text red">$0.00</span>
        <span className="text">
          {" "}
          <span className="prime">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z" />
            </svg>
            5.0
          </span>{" "}
          Seller{" "}
        </span>
        <span className="text">Top Rated Plus</span>
        <span className="text">
          <span className="prime">394</span>orders completed
        </span>
        <span className="text">
          <span className="prime">324</span>feedback received
        </span>
        <span className="text">
          <span className="prime">100%</span>of orders successfully turned in
        </span>
        <span className="text">
          <span className="prime">100%</span> of orders turned in on time
        </span>
        <span className="text">
          <span className="prime">38%</span>repeat orders
        </span>
      </div>
    </StyledRating>
  );
};

export default Rating;

const { secondBorderColor, borderColor, textColor, primeColor, red } =
  newColors;

const StyledRating = styled.div`
  .userInfo {
    position: relative;
    border: 1px solid ${secondBorderColor};
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 23px;
    min-width: 280px;
    margin-left: -50px;
    svg.edit {
      display: none;
      position: absolute;
      right: 20px;
      cursor: pointer;
    }
    .grayText {
      color: ${borderColor};
      font-size: 12px;
      font-style: normal;
      font-weight: 300;
    }
    .text {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      color: ${textColor};
      &.red {
        font-size: 18px;
        color: ${red};
      }
      .prime {
        color: ${primeColor};
        padding-right: 10px;
        svg {
          fill: ${primeColor};
          margin-bottom: -5px;
        }
      }
    }
  }
`;
