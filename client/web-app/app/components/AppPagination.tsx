'use client';

import { Pagination } from "flowbite-react";
import { useState } from "react";

type Props = {
    currentPage: number;
    pageCount: number;
}

export default function AppPagination({ currentPage, pageCount }: Props): JSX.Element {
    
    const [pageNumber, setPageNumber] = useState(currentPage);

  return (
      <Pagination
          currentPage={currentPage}
          onPageChange={ e=>setPageNumber(e) }
          totalPages={pageCount}
          layout='pagination'
          showIcons={true}
          className='text-blue-500 mb-5'
      />
  )
}
