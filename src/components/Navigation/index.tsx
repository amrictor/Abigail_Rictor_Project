import React from 'react';
import { Link } from 'react-router-dom';

import * as styles from './styles';

function Navigation() {
  return (
    <div className={styles.wrapper}>
      <Link to="/movies">Movies</Link>
      <Link to="/characters">Characters</Link>
      <Link to="/quotes">Quotes</Link>
    </div>
  );
}

export default Navigation;
