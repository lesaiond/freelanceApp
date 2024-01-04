import styled from "styled-components";
import { colors } from "../../style/__colors";

export const JobsContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.5vw;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const JobCard = styled.div`
  padding: 20px;
  border: 1px solid ${colors.darkGray};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const JobName = styled.span`
  font-size: 1.2em;
  font-weight: bold;
`;

export const CompanyName = styled.span`
  display: block;
  margin-bottom: 10px;
  color: ${colors.textColor};
`;

export const PublicationDate = styled.span`
  display: block;
  margin-bottom: 10px;
  color: ${colors.textColor};
`;

export const JobContents = styled.div`
  margin-bottom: 10px;
`;

export const DetailsButton = styled.button`
  background-color: ${colors.primeColor};
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.darkPrime};
  }
`;
