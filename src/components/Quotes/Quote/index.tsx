import React from 'react';

import { QuoteType } from 'types';

import * as styles from './styles';

function Quote({ quote } : { quote: QuoteType}) {

  return (
    <div className={styles.wrapper}>
      <div>"{quote.dialog}"</div>
    </div>
  );
}

export default Quote;
