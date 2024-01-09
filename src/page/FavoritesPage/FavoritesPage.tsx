import { useState, useEffect } from "react";
import Star from "../../components/UI/Star/Star";
import { Header } from "../../components/Header/header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { fetchJobDetails } from "../../store/slices/jobsIdSlice";

type AppDispatch = ThunkDispatch<RootState, unknown, Action<string>>;


const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const jobDetails = useSelector(
    (state: RootState) => state.jobsId.selectedJobDetails
  );

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const handleRemoveFavorite = (jobId: number) => {
    const updatedFavorites = favorites.filter(id => id !== jobId);
    setFavorites(updatedFavorites);

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };


  useEffect(() => {

    if (favorites !== undefined) {
      favorites.map((jobId) => {
        dispatch(fetchJobDetails(jobId));
        console.log(`answer${jobId}:`, jobDetails);
      })
    }
  }, [dispatch, favorites]);

  if (!jobDetails) {
    return <h1>Loading...</h1>;
  }

  

  return (
    <div>
      <Header />
      {favorites.map((jobId: number) => (
        <div key={jobId}>
          {/* Отрисовка компонента, аналогичного JobListContainer */}
          <div>
            {/* Ваш код для отображения данных из избранного */}
            <div>
              Job ID: {jobId} {/* Замените на ваш код */}
              {/* Добавляем компонент Star для удаления из избранного */}
              <Star
                isChecked={true} // Чекбокс в Favorites всегда должен быть отмечен
                onChange={() => handleRemoveFavorite(jobId)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavoritesPage;
