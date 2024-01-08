import React from "react";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import Statistics from "../../components/Statistics/Statistics";
import { StyledAdminPage } from "./AdminPage.style";

const AdminPageStatics = () => {
  return (
    <StyledAdminPage>
      <BurgerMenu />
      <div className="mainContent">
        <div>
          <h1>Statics</h1>
          <span className="text">Activity on app</span>
        </div>
        <Statistics />
      </div>
    </StyledAdminPage>
  );
};

export default AdminPageStatics;
