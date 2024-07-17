import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { fetchJobDetails } from "../../store/slices/jobsIdSlice";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { JobContents } from "../JobsContainer/jobsContainer.style";
import { JobDetailsStyled } from "./JobDetails.style";
import { Header } from "../Header/header";
import Loader from "../UI/Loader/Loader";
import { Button } from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";

export interface fastMapProps {
  name: string;
  short_name: string;
}

type AppDispatch = ThunkDispatch<RootState, unknown, Action<string>>;

const JobDetails: React.FC<{ jobId?: number }> = ({ jobId }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>();
  const jobDetails = useSelector(
    (state: RootState) => state.jobsId.selectedJobDetails
  );

  useEffect(() => {
    if (jobId !== undefined) {
      dispatch(fetchJobDetails(jobId));
    }
  }, [dispatch, jobId]);

  if (!jobDetails) {
    return <Loader />;
  }
  
  const handleClick = ({id}: number) => {
    localStorage.setItem("reply", id)
    navigate("/messages")
  }

  return (
    <JobDetailsStyled>
      <Header />
      <div className="mainContent">
        {/* <div className="leftBar bar">
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
              <div className="text">
                
                {jobDetails.tags.map((data: fastMapProps) => data.name)}
              </div>{" "}
            </>
          )}
        </div> */}
        <div className="companyInfo">
          <div className="grayText">company:</div>
          <span className="text">{jobDetails.company.name}</span>
          <div className="grayText">publication_date:</div>
          <span className="text">{jobDetails.publication_date}</span>
          <div className="grayText">Level:</div>
          <span className="text">{jobDetails.levels[0].name}</span>
          <div className="grayText">categories:</div>
          <span className="text">{jobDetails.categories[0].name}</span>
          <div className="grayText">locations:</div>
          <span className="text">
            {" "}{}
            {jobDetails.locations.map((data: fastMapProps) => data.name)}
          </span>
        </div>
        <div className="RightBar bar">
          <h1>{jobDetails.name}</h1>
          <JobContents
            dangerouslySetInnerHTML={{
              __html: jobDetails.contents,
            }}
          />{" "}
        <Button buttonText="Reply" onClick={() => handleClick(jobDetails.id)} />
        </div>
      </div>
    </JobDetailsStyled>
  );
};

export default JobDetails;
