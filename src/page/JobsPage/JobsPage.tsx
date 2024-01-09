import React from 'react';
import JobListContainer from '../../components/JobsContainer/jobsContainer';
import { Header } from '../../components/Header/header';

const JobsPage = () => {
  return (
    <div>
      <Header />
      <JobListContainer />
    </div>
  );
};

export default JobsPage;