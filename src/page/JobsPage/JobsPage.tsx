import React, { useEffect } from 'react';
import styled from 'styled-components';
import JobListContainer from '../../components/JobsContainer/jobsContainer';
import { Header } from '../../components/Header/header';
import { useNavigate } from 'react-router-dom';

const JobsPage = () => {const navigate = useNavigate()
  useEffect(() => {
    const loginData = localStorage.getItem("login")
    console.log("loginData", loginData);
    if(loginData === "success") {
      console.log("loginData", "success");
    } else {
      navigate("/login")
    }
    
  }, [])
  return (
    <StyledJobsPage>
      <Header />
      <JobListContainer />
    </StyledJobsPage>
  );
};

export default JobsPage;

const StyledJobsPage = styled.div`
  height: 100vh;
  .jobList{
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`