import React from "react";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import { StyledAdminPage } from "./AdminPage.style";
import CompaniesContainer from "../../components/CompaniesContainer/CompaniesContainer";

const AdminPageSettings = () => {
  return (
    <StyledAdminPage>
      <BurgerMenu />
      <div className="mainContent">
        <div>
          <h1>Settings</h1>
          <span className="text">Manage companies and other settings</span>
        </div>
        <CompaniesContainer />
      </div>
    </StyledAdminPage>
  );
};

export default AdminPageSettings;
