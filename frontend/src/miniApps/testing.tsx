import axios from "axios";
import { useEffect, useState } from "react";

const MovieApi = axios.create({
  baseURL: "https://moviesdatabase.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "4c50da5040mshf75aa74f17a1faap1bb575jsn94ac27ca284b",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
});

const MovieTesting = () => {
  const [movies, setMovies] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [currentPage, setCurrentPage] = useState(
    "/titles/x/upcoming?page=1&limit=20"
  );

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const response = await MovieApi.get(currentPage);
        setMovies(response.data);
        setIsLoading(false);
      } catch (e: any) {
        setError(e.message);
        console.log(error);
        setIsLoading(false);
      }
    }
    getMovies();
  }, [currentPage]);

  return (
    <div>
      <h1>Movie API Testing</h1>
      {movies?.results.map((movie: any, index: number) => {
        if (movie.primaryImage?.url !== undefined) {
          return (
            <div key={index}>
              <img src={movie?.primaryImage?.url} alt="Movie Poster" />
              <h2>Movie: {movie?.originalTitleText?.text}</h2>
            </div>
          );
        }
      })}
    </div>
  );
};

export { MovieTesting };
