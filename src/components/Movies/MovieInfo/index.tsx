import React from 'react';
import { MovieType } from 'types';
import * as styles from './styles';

import { FaRulerVertical as HeightIcon } from 'react-icons/fa';
import { MdFace3 as HairIcon } from 'react-icons/md';
import { AiTwotoneHeart as SpouseIcon } from 'react-icons/ai';
import { TbWorld as RealmIcon } from 'react-icons/tb';
import { formatText } from 'utils/format';
import { Link } from 'react-router-dom';

function MovieInfo({ movie } : { movie: MovieType}) {

  return (
    <div className={styles.wrapper}>
      <div>
        <div>{movie.name} ({movie.runtimeInMinutes} minutes)</div>
        <div>${movie.budgetInMillions} million</div>
        <div>${movie.boxOfficeRevenueInMillions} million</div>
        <div>Won {movie.academyAwardWins} of {movie.academyAwardNominations} academy award nominations</div>
      </div>
      <div>
        {movie.rottenTomatoesScore}%
      </div>
    </div>
  );
}

export default MovieInfo;
