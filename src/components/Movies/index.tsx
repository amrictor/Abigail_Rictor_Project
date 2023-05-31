import React, { useState } from 'react';

import useMovies from 'queries/useMovies';
import Loading from 'components/ui/Loading';
import List from 'components/ui/List';

import MovieInfo from './MovieInfo';

import { MovieType } from 'types';

function Movies() {
  const [page, setPage] = useState(1);
  const { data: { docs: movies, pages }, isFetching } = useMovies();

  if (isFetching) {
    return <Loading/>;
  }

  return (
    <List<MovieType>
      page={page} 
      setPage={setPage} 
      totalPages={pages} 
      items={movies} 
      render={(movie: MovieType) => <MovieInfo key={movie._id} movie={movie}/>}
    />
  );
}

export default Movies;
