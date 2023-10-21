// import { isError } from "@tanstack/react-query";
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
  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  console.log(movies);
  return (
    <>
      <h3>Movies List:</h3>
      {movies?.map((movie: any, index: number) => {
        return (
          <div key={index}>
            <img
              className="p-4 flex-auto m-3"
              height={300}
              width={300}
              src={movie?.primaryImage?.url}
              alt="Movie Poster"
            />
          </div>
        );
      })}
    </>
  );
};

export { MoviesApp };
