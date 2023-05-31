import React, { useState } from 'react';

import useQuotes from 'queries/useQuotes';
import Loading from 'components/ui/Loading';
import List from 'components/ui/List';

import Quote from './Quote';

import { QuoteType } from 'types';

function Quotes() {
  const [page, setPage] = useState(1);
  const { data: { docs: quotes, pages }, isFetching } = useQuotes(page);

  if (isFetching) {
    return <Loading/>
  }

  return (
    <List<QuoteType> 
      page={page} 
      setPage={setPage} 
      totalPages={pages} 
      items={quotes} 
      render={(quote: QuoteType) => <Quote key={quote._id} quote={quote}/>}
    />
  );
}

export default Quotes;
