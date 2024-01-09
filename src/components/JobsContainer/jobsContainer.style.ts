import styled from "styled-components";
import { newColors, colors } from "../../style/__colors";

const { bgc, textColor, elemsBgc } = newColors;

export const JobsContainerStyled = styled.div`
  background: ${bgc};
  color: ${textColor};
  font-family: Roboto;
  .row{ 
    display: flex;
    align-items: end;
    gap: 15px;
  }
`;

export const JobCard = styled.div`
  padding: 20px;
  border: none;
  background: ${elemsBgc};
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  gap: 10%;
  margin: 0px 0% 66px 0;
  margin-left: 30px;
  margin-top: 20px;
`;

export const JobName = styled.span`
  min-width: 170px;
  cursor: pointer;
  font-family: Roboto;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  `;

export const CompanyName = styled.h3`
  min-width: 170px;
  display: block;
  color: ${colors.textColor};
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: 400;
`;

export const PublicationDate = styled.span`
  display: block;
  color: ${colors.textColor};
`;

export const JobContents = styled.div`
  margin-top: 11px;
  margin-bottom: 10px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  br {
    display: none;
  }
  b {
    font-weight: 500;
  }
`;

export const DetailsButton = styled.button`
  background-color: ${bgc};
  color: ${textColor};
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    color: ${bgc};

    background-color: ${colors.darkPrime};
  }
`;
