import React from 'react';
import { QuoteType } from 'types';

import { FaRulerVertical as HeightIcon } from 'react-icons/fa';
import { MdFace3 as HairIcon } from 'react-icons/md';
import { AiTwotoneHeart as SpouseIcon } from 'react-icons/ai';
import { TbWorld as RealmIcon } from 'react-icons/tb';
import { formatText } from 'utils/format';
import { Link } from 'react-router-dom';

import * as styles from './styles';

function Quote({ quote } : { quote: QuoteType}) {

  return (
    <div className={styles.wrapper}>
      <div>"{quote.dialog}"</div>
      <Link to={`/movies/${quote.movie}`}> See movie</Link>
      <Link to={`/characters/${quote.character}`}> See Character</Link>
    </div>
  );
}

export default Quote;
