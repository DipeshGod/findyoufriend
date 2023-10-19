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

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const response = await movieApi.get("/titles/x/upcoming?page=1");
        setMovies(response.data.results);
        setIsLoading(false);
      } catch (e: any) {
        setError(e.message);
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);
  return { movies, isLoading, error };
};

const MoviesApp = () => {
  const { movies, isLoading, error } = useUpcomingMovies();

  return (
    <>
      <h3 className="text-3xl p-4"> These are the upcoming movies:</h3>
    </>
  );
};

export { MoviesApp };
