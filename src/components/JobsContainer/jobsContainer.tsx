// JobListContainer.tsx

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobList } from "../../store/slices/jobsSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../store/rootReducer";
import { incrementPage, decrementPage } from '../../store/slices/jobsSlice';

interface Job {
  id: number;
  title: string;
  // Добавьте другие свойства вакансии, если они есть
}

const JobListContainer: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const jobList = useSelector(
    (state: { jobs: { jobList: Job[] } }) => state.jobs.jobList
  );

  useEffect(() => {
    dispatch(
      fetchJobList({ page: 0, descending: true /* other parameters */ })
    );
  }, [dispatch]);

  if (jobList.length === 0) {
    return <div>Loading...</div>;
  }

  console.log("jobList", jobList);

  return (
    <div>
      <h1>Список вакансий</h1>
      {jobList.map((job) => (
        <div key={job.id} dangerouslySetInnerHTML={{ __html: job.contents }} />
      ))}
      <button onClick={() => dispatch(decrementPage())}>Предыдущая страница</button>
      <button onClick={() => dispatch(incrementPage())}>Следующая страница</button>
    </div>
  );
};

export default JobListContainer;
