// CompaniesContainer.tsx

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../store/rootReducer";
import { fetchCompanies } from "../../store/slices/companieSlice";
import { RowButton } from "../UI/RowButton/RowButton";
import { StyledGrayBox } from "../UI/GrayBox/GrayBox.styled";
import { StyledCompamiesContainer } from "./CompaniesContainer.style";

interface Company {
  locations: Array<{ name: string }>;
  refs: {
    landing_page: string;
    jobs_page: string;
    mini_f1_image: string;
    f1_image: string;
    f2_image: string;
    f3_image: string;
    logo_image: string;
  };
  id: number;
  name: string;
}

const CompaniesContainer: React.FC = () => {
  const [page, setPage] = useState(0);

  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const companyList = useSelector(
    (state: { companies: { companyList: Company[] } }) =>
      state.companies.companyList
  );

  useEffect(() => {
    dispatch(
      fetchCompanies({ page: page, descending: true /* other parameters */ })
    );
  }, [dispatch, page]);

  if (companyList.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {companyList.map((company) => (
        <StyledCompamiesContainer>
          <StyledGrayBox className="companie" key={company.id}>
            <div className="info">
              <img className="logoImage" src={company.refs.logo_image} alt="" />
              <div>
                <div className="name">{company.name}</div>
                <div className="location">{company.locations[0].name}</div>
              </div>
            </div>
            <div className="actions">
              <div className="more">more</div>
              <div className="remove">remove</div>
            </div>
          </StyledGrayBox>
        </StyledCompamiesContainer>
      ))}
      <RowButton
        leftRowText="<"
        rightRowText=">"
        text={page}
        rightRowProps={{ onClick: () => setPage(1 + page) }}
        leftRowProps={{ onClick: () => setPage(page - 1) }}
      />
    </div>
  );
};

export default CompaniesContainer;
