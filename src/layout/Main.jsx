import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=ac95c6ff&s=matrix&page=1&plot=full"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchMovies = (str) => {
    fetch(
      ` http://www.omdbapi.com/?i=tt3896198&apikey=ac95c6ff&s=${str}&page=1&plot=full`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  };

  render() {
    const { movies } = this.state;

    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {movies.length ? <Movies movies={this.state.movies} /> : <Preloader />}
      </main>
    );
  }
}

export { Main };
