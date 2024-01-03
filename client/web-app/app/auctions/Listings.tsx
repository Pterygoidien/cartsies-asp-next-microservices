'use client';
import AuctionCard from "./AuctionCard";
import AppPagination from "../components/AppPagination";
import { useEffect, useState } from "react";
import { getData } from "../actions/auctionActions";
import Filters from "./Filters";
import { PagedResult } from "@/types";
import { useParamsStore } from "@/hooks/useParamsStore";
import { shallow } from "zustand/shallow";
import qs from "query-string";
import EmptyFilter from "../components/EmptyFilter";


export default function Listings()
{
  const [data, setData] = useState<PagedResult<IAuction>>();
  const params = useParamsStore(state => ({
    pageNumber: state.pageNumber,
    pageSize: state.pageSize,
    searchTerm: state.searchTerm,
    orderBy: state.orderBy,
    filterBy: state.filterBy
  }), shallow);
  const setParams = useParamsStore(state => state.setParams);
  const url = qs.stringifyUrl({ url: '', query: params });
  
  function setPageNumber(pageNumber: number) {
    setParams({ pageNumber });
  }


  useEffect(() => {
    getData(url).then(data => {
      setData(data);
    })
  }, [url]);

  if (!data) return <p>Loading...</p>
  
  return (
    <>
      <Filters />
      {data.totalCount === 0 ? (
        <EmptyFilter showReset />
      ) : (<>
           <section className="grid grid-cols-4 gap-6">
        {data.results.map((auction: IAuction) => (
          <AuctionCard key={auction.id} auction={auction} />
        ))}
      </section>
      <section className="flex justify-center mt-4">
        <AppPagination pageChanged={setPageNumber} currentPage={params.pageNumber} pageCount={data.pageCount} />
      </section>
          </>
      )
      }
      
    </>  
  )
}
