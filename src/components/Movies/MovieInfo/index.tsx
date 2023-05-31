import React from 'react';
import { MovieType } from 'types';
import * as styles from './styles';

function MovieInfo({ movie } : { movie: MovieType}) {

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.name}>{movie.name} ({movie.runtimeInMinutes} minutes)</div>
        <div>Budget: ${movie.budgetInMillions} million</div>
        <div>Box office: ${movie.boxOfficeRevenueInMillions} million</div>
        <div>Won {movie.academyAwardWins} of {movie.academyAwardNominations} academy award nominations</div>
      </div>
      <div className={styles.score(movie.rottenTomatoesScore)}>
        {Math.round(movie.rottenTomatoesScore)}%
      </div>
    </div>
  );
}

export default MovieInfo;
