import axios from "axios";
import { useEffect, useState } from "react";
const movieApi = axios.create({
  baseURL: "https://moviesdatabase.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "4c50da5040mshf75aa74f17a1faap1bb575jsn94ac27ca284b",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
});

const useUpcomingMovies = () => {
  const [movies, setMovies] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [currentPage, setCurrentPage] = useState(
    "/titles/x/upcoming?page=1&limit=20"
  );

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const response = await movieApi.get(currentPage);
        setMovies(response.data);

        setIsLoading(false);
      } catch (e: any) {
        setError(e.message);
        setIsLoading(false);
      }
    }

    getMovies();
  }, [currentPage]);

  const handleNextPage = () => {
    console.log(movies);
    setCurrentPage(movies.next);
  };
  return { movies, isLoading, error, handleNextPage };
};
export { useUpcomingMovies };
