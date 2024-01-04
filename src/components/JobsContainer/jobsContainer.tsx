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

interface Company {
  id: number;
  short_name: string;
  name: string;
}

interface JobLocation {
  name: string;
}

interface JobLevel {
  name: string;
  short_name: string;
}

interface Job {
  id: number;
  name: string;
  contents: string;
  levels: JobLevel[];
  locations: JobLocation[];
  model_type: string;
  publication_date: string;
  refs: {
    landing_page: string;
  };
  short_name: string;
  tags: string[];
  type: string;
  company: Company[];
}

const JobListContainer: React.FC = () => {
  const [page, setpage] = useState(0);

  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const jobList = useSelector(
    (state: { jobs: { jobList: Job[] } }) => state.jobs.jobList
  );

  useEffect(() => {
    dispatch(
      fetchJobList({ page: page, descending: true /* other parameters */ })
    );
  }, [dispatch, page]);

  if (jobList.length === 0) {
    return <div>Loading...</div>;
  }

  const formatDate = (dateString: string) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "ru-RU",
      options
    );
    return formattedDate;
  };
  return (
    <div>
      <h1>Jobs</h1>
      <JobsContainerStyled>
        {jobList.map((job) => (
          <JobCard key={job.id}>
            <JobName>{job.name} {job.id}</JobName>
            <JobContents
              dangerouslySetInnerHTML={{
                __html: truncateContents(job.contents, 200),
              }}
            />
            <PublicationDate>
              Publication Date: {formatDate(job.publication_date)}
            </PublicationDate>
            <CompanyName>Company: {job.company.name}</CompanyName>
            <DetailsButton>Подробнее</DetailsButton>
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
