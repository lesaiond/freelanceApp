import { StyledGrayBox } from "../../components/UI/GrayBox/GrayBox.styled";
import { StyledAdminPage } from "./AdminPage.style";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import JobListContainer from "../../components/JobsContainer/jobsContainer";

const AdminProjectsPage = () => {
  return (
    <StyledAdminPage>
      <BurgerMenu />
      <div className="mainContent">
        <div>
          <h1>Projects</h1>
          <span className="text">Welcome back</span>
        </div>
        <div className="space-between">
          <StyledGrayBox className="grayBox">
            <span className="skill">Current Orders</span>
            <div className="space-between skillBox gap">
              <div>
                <div className="skillTitle"></div>
                <div className="skillStatic">4987456</div>
              </div>
              <div className="greenCircle">100%</div>
            </div>
          </StyledGrayBox>
          <StyledGrayBox className="grayBox ">
            <span className="skill">Skilled users on projects</span>
            <div className="space-between skillBox gap">
              <div>
                <div className="skillTitle"></div>
                <div className="skillStatic">45665</div>
              </div>
              <div className="redCircle">100%</div>
            </div>
          </StyledGrayBox>
        </div>
        <div className="space-between">
          <StyledGrayBox className="grayBox">
            <span className="skill">Orders in Queue</span>
            <div className="space-between skillBox gap">
              <div>
                <div className="skillTitle"></div>
                <div className="skillStatic">34534366</div>
              </div>
              <div className="redCircle">100%</div>
            </div>
          </StyledGrayBox>
          <StyledGrayBox className="grayBox">
            <span className="skill">User Current users with projects</span>
            <div className="space-between skillBox gap">
              <div>
                <div className="skillTitle"></div>
                <div className="skillStatic">34554</div>
              </div>
              <div className="greenCircle">100%</div>
            </div>
          </StyledGrayBox>
        </div>
        <JobListContainer />
      </div>
    </StyledAdminPage>
  );
};

export default AdminProjectsPage;
