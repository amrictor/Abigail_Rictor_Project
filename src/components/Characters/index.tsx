import React, { useState } from 'react';

import useCharacters from 'queries/useCharacters';
import Loading from 'components/ui/Loading';

import CharacterInfo from './CharacterInfo';

import { CharacterType } from 'types';

import * as styles from './styles';
import List from 'components/ui/List';

function Characters() {
  const [page, setPage] = useState(1);
  const { data: { docs: characters, pages }, isLoading } = useCharacters(page);

  if (isLoading) {
    return <Loading/>
  }

  return (
    <List<CharacterType>
      page={page} 
      setPage={setPage} 
      totalPages={pages} 
      items={characters} 
      render={(character: CharacterType) => <CharacterInfo character={character}/>}
    />
  );
}

export default Characters;
