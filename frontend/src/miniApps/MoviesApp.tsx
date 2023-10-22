// import { isError } from "@tanstack/react-query";
import { Button } from "@mui/material";
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
    "/titles/x/upcoming?page=1&limit=5"
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

const MoviesApp = () => {
  const { movies, isLoading, error, handleNextPage } = useUpcomingMovies();
  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-4">
      <div className="border grid grid-cols-3 gap-4 justify-between">
        {movies?.results.map((movie: any, index: number) => {
          if (movie.primaryImage?.url !== undefined) {
            return (
              <div key={index} className=" m-3">
                <img
                  className="pt-4 flex-auto mt-3"
                  src={movie?.primaryImage?.url}
                  alt="Movie Poster"
                />
                <h2 className="text-lg text-blue-600 pt-1">
                  Movie Name: {movie.originalTitleText?.text}
                </h2>
              </div>
            );
          }
        })}
      </div>
      <div className="mt-5 flex justify-center">
        <Button variant="contained" onClick={handleNextPage}>
          Next
        </Button>
      </div>
    </div>
  );
};

export { MoviesApp };
