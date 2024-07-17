import { useState, useEffect } from "react";
import Star from "../../components/UI/Star/Star";
import { useDispatch } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { fetchJobDetails } from "../../store/slices/jobsIdSlice";
import { IJobProps } from "../../components/JobsContainer/jobsContainer";
import {
  CompanyName,
  DetailsButton,
  JobCard,
  JobName,
  PublicationDate,
} from "../../components/JobsContainer/jobsContainer.style";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { StyledFavorities } from "./Favorities.style";

type AppDispatch = ThunkDispatch<RootState, unknown, Action<string>>;

const Favorites = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<number[]>([]);
  const [favoritesDetails, setFavoritesDetails] = useState<{
    [key: number]: IJobProps | null;
  }>({});
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(storedFavorites);
  }, []);

  const handleRemoveFavorite = (jobId: number) => {
    const updatedFavorites = favorites.filter((id) => id !== jobId);
    setFavorites(updatedFavorites);

    // Удаление деталей из объекта по jobId
    setFavoritesDetails((prevDetails) => {
      const updatedDetails = { ...prevDetails };
      delete updatedDetails[jobId];
      return updatedDetails;
    });

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    // Запрос деталей для каждой избранной вакансии
    if (favorites !== undefined) {
      const fetchDetails = async () => {
        const detailsArray = await Promise.all(
          favorites.map((jobId) => dispatch(fetchJobDetails(jobId)))
        );
        // Обновление состояния деталей для вакансии с использованием jobId в качестве ключа
        setFavoritesDetails((prevDetails) => {
          const updatedDetails: { [key: number]: IJobProps | null } = {
            ...prevDetails,
          };
          detailsArray.forEach((details, index) => {
            if (details.payload) {
              updatedDetails[favorites[index]] = details.payload;
            }
          });
          return updatedDetails;
        });
      };

      fetchDetails();
    }
  }, [dispatch, favorites]);

  if (favorites.length === 0) {
    return <div>No favorites selected.</div>;
  }
  // console.log(favoritesDetails[8965069]?.contents || "Contents not available");
  const handleDetailsClick = (jobId: number) => {
    dispatch(fetchJobDetails(jobId));
    navigate("/job/details");
  };

  const formatDate = (dateString: string) => {
    const formattedDate = moment(dateString).format("D-MMM-YY");
    return formattedDate;
  };

  return (
    <StyledFavorities className="columns">
      {favorites.map((jobId: number) => (
        <JobCard className="column" key={jobId}>
          <div>
            <JobName onClick={() => handleDetailsClick(jobId)}>
              {favoritesDetails[jobId]?.name}
            </JobName>
          </div>
          <div>
            <PublicationDate>
              Due Date: {formatDate(favoritesDetails[jobId]?.publication_date)}
            </PublicationDate>
            <CompanyName>
              Company: {favoritesDetails[jobId]?.company.name}
            </CompanyName>
            <div className="row">
              <DetailsButton onClick={() => handleDetailsClick(jobId)}>
                more info
              </DetailsButton>
              <Star
                isChecked={true}
                onChange={() => handleRemoveFavorite(jobId)}
              />
            </div>
          </div>
        </JobCard>
      ))}
    </StyledFavorities>
  );
};

export default Favorites;
