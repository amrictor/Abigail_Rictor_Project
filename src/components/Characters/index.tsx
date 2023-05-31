import React, { useState } from 'react';

import useCharacters from 'queries/useCharacters';
import Loading from 'components/ui/Loading';
import List from 'components/ui/List';

import CharacterInfo from './CharacterInfo';

import { CharacterType } from 'types';

function Characters() {
  const [page, setPage] = useState(1);
  const { data: { docs: characters, pages }, isFetching } = useCharacters(page);

  if (isFetching) {
    return <Loading/>
  }

  return (
    <List<CharacterType>
      page={page} 
      setPage={setPage} 
      totalPages={pages} 
      items={characters} 
      render={(character: CharacterType) => <CharacterInfo key={character._id} character={character}/>}
    />
  );
}

export default Characters;
