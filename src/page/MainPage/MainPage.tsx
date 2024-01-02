// Главная страница (например, MainPage.tsx)
import React, {  } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/useSlice";
import { Header } from "../../components/Header/header";
// import { useGetProjectsQuery } from "../../store/API/postApi";
// import ProjectsPage from "../../components/ProjectsPage/ProjectsPage";

export const MainPage: React.FC = () => {
  const userData = useSelector(selectUser);
  // const [fetchtrigger, {data: postList}] = useGetProjectsQuery()

  // useEffect(() => {
  //   fetchtrigger(null)
    // console.log("data:", data);
    
  // }, [fetchtrigger, data])

  return (
    <div>
      <Header />
      {!userData ? <div>Пользователь не залогинен</div> : <h2>Добро пожаловать, {userData.username}!</h2>}
      
      {/* <ProjectsPage /> */}
      {/* Здесь можешь отобразить другие компоненты или информацию, доступную только залогиненному пользователю */}
    </div>
  );
};
