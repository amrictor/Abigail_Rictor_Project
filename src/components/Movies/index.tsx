import React, { useState } from 'react';
import useMovies from '../../queries/useMovies';
import Loading from '../ui/Loading';
import { MovieType } from 'types';
import MovieInfo from './MovieInfo';

import * as styles from './styles';
import List from 'components/ui/List';

function Movies() {
  const [page, setPage] = useState(1);
  const { data: { docs: movies, pages }, isLoading } = useMovies();

  if (isLoading) {
    return <Loading/>
  }

  return (
    <List<MovieType>
      page={page} 
      setPage={setPage} 
      totalPages={pages} 
      items={movies} 
      render={(movie: MovieType) => <MovieInfo movie={movie}/>}
    />
  );
}

export default Movies;
