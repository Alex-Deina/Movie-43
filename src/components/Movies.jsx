import { Movie } from "./Movie";
import React from "react";

function Movies(props) {
  const { movies = [] } = props;
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
}
export { Movies };
