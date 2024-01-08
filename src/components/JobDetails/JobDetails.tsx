import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { fetchJobDetails } from "../../store/slices/jobsIdSlice";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { JobContents } from "../JobsContainer/jobsContainer.style";
import { JobDetailsStyled } from "./JobDetails.style";

export interface fastMapProps {
  name: string;
  short_name: string;
}

type AppDispatch = ThunkDispatch<RootState, unknown, Action<string>>;

const JobDetails: React.FC<{ jobId?: number }> = ({ jobId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const jobDetails = useSelector(
    (state: RootState) => state.jobsId.selectedJobDetails
  );

  useEffect(() => {
    console.log("in JobDetails dispatching:", jobId);

    if (jobId !== undefined) {
      dispatch(fetchJobDetails(jobId));
    }
  }, [dispatch, jobId]);

  if (!jobDetails) {
    return <h1>Loading...</h1>;
  }
  console.log("jobDetails:", !jobDetails.tags);

  return (
    <JobDetailsStyled>
      <div className="leftBar bar">
        <div className="gray">company:</div>
        <div className="text">{jobDetails.company.name}</div>
        <div className="gray">publication_date:</div>
        <div className="text">{jobDetails.publication_date}</div>
        <div className="gray">locations:</div>
        <div className="text">
          {jobDetails.locations.map((data: fastMapProps) => data.name)}
        </div>
        <div className="gray">categories:</div>
        <div className="text">
          {jobDetails.categories.map((data: fastMapProps) => data.name)}
        </div>
        <div className="gray">levels:</div>
        <div className="text">
          {jobDetails.levels.map((data: fastMapProps) => data.name)}
        </div>
        {jobDetails.tags && (
          <>
            <div className="gray">tags:</div>
            <div className="text">ll
              {jobDetails.tags.map((data: fastMapProps) => data.name)}
            </div>{" "}
          </>
        )}
      </div>
      <div className="RightBar bar">
        <h2>Job Details</h2>
        <p>Name: {jobDetails.name}</p>
        <JobContents
          dangerouslySetInnerHTML={{
            __html: jobDetails.contents,
          }}
        />{" "}
      </div>
    </JobDetailsStyled>
  );
};

export default JobDetails;
