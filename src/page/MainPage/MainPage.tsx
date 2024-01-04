import JobListContainer from "../../components/JobsContainer/jobsContainer";
import { MainPageStyled } from "./MainPage.style";

export const MainPage: React.FC = () => {
  return (
    <MainPageStyled>
      <h1>Main Page</h1>
      <JobListContainer />
    </MainPageStyled>
  );
};
