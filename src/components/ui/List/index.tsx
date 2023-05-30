import React, { useState, ReactNode } from 'react';
import * as styles from './styles';

function List<T>({ items, render, totalPages, page, setPage }: { 
  items: T[], 
  render: (item: T) => ReactNode, 
  totalPages: number,
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>
}) {
  
  const nextPage = () => {
    setPage(page => {
      if(page < totalPages){
        return page + 1;
      }
      return page;
    });
  };

  const prevPage = () => {
    setPage(page => {
      if(page > 1){
        return page - 1;
      }
      return page;
    });
  }

  return (
    <div className={styles.wrapper}>
      {items?.map(render)}
      {totalPages > 1 && <div className={styles.pagination}>
        <button disabled={page === 1} onClick={prevPage}>Prev</button>
        {page}
        <button disabled={page === totalPages} onClick={nextPage}>Next</button>
      </div>}
    </div>
  );
}

export default List;
