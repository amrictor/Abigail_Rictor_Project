import React, { useState } from 'react';
import useQuotes from 'queries/useQuotes';
import Loading from 'components/ui/Loading';
import { QuoteType } from 'types';
import Quote from './Quote';
import List from 'components/ui/List';

function Quotes() {
  const [page, setPage] = useState(1);
  const { data: { docs: quotes, pages }, isLoading } = useQuotes(page);

  if (isLoading) {
    return <Loading/>
  }

  return (
    <List<QuoteType> 
      page={page} 
      setPage={setPage} 
      totalPages={pages} 
      items={quotes} 
      render={(quote: QuoteType) => <Quote quote={quote}/>}
    />
  );
}

export default Quotes;
