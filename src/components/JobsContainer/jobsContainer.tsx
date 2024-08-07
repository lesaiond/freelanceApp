import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobList } from "../../store/slices/jobsSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../store/rootReducer";
import {
  CompanyName,
  DetailsButton,
  JobCard,
  JobContents,
  JobName,
  JobsContainerStyled,
  PublicationDate,
} from "./jobsContainer.style";
import { RowButton } from "../UI/RowButton/RowButton";
import { fetchJobDetails } from "../../store/slices/jobsIdSlice";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Star from "../UI/Star/Star";
import Loader from "../UI/Loader/Loader";

export interface ICompanyProps {
  id: number;
  short_name: string;
  name: string;
}

export interface IJobLocationProps {
  name: string;
}

export interface IJobLevelProps {
  name: string;
  short_name: string;
}

export interface IJobProps {
  id: number;
  name: string;
  contents: string;
  levels: IJobLevelProps[];
  locations: IJobLocationProps[];
  model_type: string;
  publication_date: string;
  refs: {
    landing_page: string;
  };
  short_name: string;
  tags: string[];
  type: string;
  company: ICompanyProps[];
}

const JobListContainer: React.FC = () => {
  const [page, setpage] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);

  const navigate = useNavigate();

  const dispatch: ThunkDispatch<RootState, null, AnyAction> = useDispatch();
  const jobList = useSelector(
    (state: { jobs: { jobList: IJobProps[] } }) => state.jobs.jobList
  );

  useEffect(() => {
    dispatch(
      fetchJobList({ page: page, descending: true /* other parameters */ })
    );
  }, [dispatch, page]);

  const handleStarClick = (jobId: number) => {
    console.log("clicked:", jobId);
    if (favorites.includes(jobId)) {
      const updatedFavorites = favorites.filter((id) => id !== jobId);
      setFavorites(updatedFavorites);
    } else {
      const updatedFavorites = [...favorites, jobId];
      setFavorites(updatedFavorites);
    }
  };

  useEffect(() => {
    console.log("its", localStorage.getItem("favorites"));
    
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    if (storedFavorites.length > 0) {
      setFavorites(storedFavorites);
    }  }, []);
  

  const handleDetailsClick = (jobId: number) => {
    
    dispatch(fetchJobDetails(jobId));
    navigate("/job/details");
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  if (jobList.length === 0) {
    return <Loader />;
  }

  const formatDate = (dateString: string) => {
    const formattedDate = moment(dateString).format("D-MMM-YY");
    return formattedDate;
  };
  console.log(jobList);

  return (
    <div>
      <JobsContainerStyled className="jobList">
        {jobList.map((job: IJobProps) => (
          <JobCard key={job.id}>
            <div>
              <JobName onClick={() => handleDetailsClick(job.id)}>
                {job.name}
              </JobName>
              <JobContents
                dangerouslySetInnerHTML={{
                  __html: truncateContents(job.contents, 200),
                }}
              />
            </div>
            <div>
              <PublicationDate>
                Due Date: {formatDate(job.publication_date)}
              </PublicationDate>
              <CompanyName>Company: {job.company.name}</CompanyName>
              <div className="row">
                <DetailsButton onClick={() => handleDetailsClick(job.id)}>
                  more info
                </DetailsButton>
                <Star
                isChecked={favorites.includes(job.id)}
                onChange={() => handleStarClick(job.id)}
              />
              </div>
            </div>
          </JobCard>
        ))}
      </JobsContainerStyled>
      <RowButton
        leftRowText="<"
        rightRowText=">"
        text={page}
        rightRowProps={{ onClick: () => setpage(1 + page) }}
        leftRowProps={{ onClick: () => setpage(page - 1) }}
      />
    </div>
  );
};

function truncateContents(contents: string, maxLength: number): string {
  if (contents.length <= maxLength) {
    return contents;
  }
  return contents.slice(0, maxLength) + "...";
}

export default JobListContainer;
