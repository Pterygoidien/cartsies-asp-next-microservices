'use client';
import AuctionCard from "./AuctionCard";
import AppPagination from "../components/AppPagination";
import { useEffect, useState } from "react";
import { getData } from "../actions/auctionActions";


export default function Listings()
{

  const [auctions, setAuctions] = useState<IAuction[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getData(currentPage).then(data => {
      setAuctions(data.results);
      setPageCount(data.pageCount);
    })
  }, [currentPage]);

  if(auctions.length === 0) return <p>Loading...</p>
  return (
    <>
       <section className="grid grid-cols-4 gap-6">
        {auctions && auctions.map((auction: IAuction) => (
          <AuctionCard key={auction.id} auction={auction} />
        ))}
      </section>
      <section className="flex justify-center mt-4">
        <AppPagination currentPage={1} pageCount={pageCount} />
      </section>
    </>
   
  )
}
