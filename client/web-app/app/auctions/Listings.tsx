'use client';
import AuctionCard from "./AuctionCard";
import AppPagination from "../components/AppPagination";
import { useEffect, useState } from "react";
import { getData } from "../actions/auctionActions";
import Filters from "./Filters";


export default function Listings()
{
  const [auctions, setAuctions] = useState<IAuction[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(4);

  useEffect(() => {
    getData(currentPage, pageSize).then(data => {
      setAuctions(data.results);
      setPageCount(data.pageCount);
    })
  }, [currentPage, pageSize]);

  if(auctions.length === 0) return <p>Loading...</p>
  return (
    <>
      <Filters pageSize={pageSize} setPageSize={setPageSize} />
       <section className="grid grid-cols-4 gap-6">
        {auctions && auctions.map((auction: IAuction) => (
          <AuctionCard key={auction.id} auction={auction} />
        ))}
      </section>
      <section className="flex justify-center mt-4">
        <AppPagination pageChanged={setCurrentPage} currentPage={currentPage} pageCount={pageCount} />
      </section>
    </>  
  )
}
