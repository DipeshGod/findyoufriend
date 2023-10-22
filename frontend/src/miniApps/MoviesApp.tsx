// import { isError } from "@tanstack/react-query";
// import { Button } from "@mui/material";

import { useUpcomingMovies } from "./hook/useUpcomingMovies";
import { useHandleScroll } from "./hook/useHandleScroll";

const MoviesApp = () => {
  const { movies, isLoading, error, handleNextPage } = useUpcomingMovies();

  useHandleScroll(handleNextPage);

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
        {/* <Button variant="contained" onClick={handleNextPage}>
          Next
        </Button> */}
      </div>
    </div>
  );
};

export { MoviesApp };
