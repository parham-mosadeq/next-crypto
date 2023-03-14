import { useState } from 'react';
const usePaginate = (crPage, dPerPage, arr) => {
  const [currentPage, setCurrentPage] = useState(crPage);
  const [dataPerPage, setDataPerPage] = useState(dPerPage);


  const handleNextPage = () => {
    if (currentPage >= 10) {
      setCurrentPage(1);
    }
    setCurrentPage((prev) => (prev += 1));
  };

  const handlePrevPage = () => {
    if (currentPage === 1) {
      setCurrentPage(1);
    }
    setCurrentPage((prev) => (prev -= 1));
  };

  const indexOfLastEx = currentPage * dataPerPage;
  const indexOfFirstEx = indexOfLastEx - dataPerPage;

  const currentItems = arr.slice(indexOfFirstEx, indexOfLastEx);
  return [
    currentPage,
    handleNextPage,
    handlePrevPage,
    currentItems,
  ];
};

export default usePaginate;
