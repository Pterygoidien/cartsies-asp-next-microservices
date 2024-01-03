"use server";

import { PagedResult } from "@/types";

export async function getData(
  currentPage: number
): Promise<PagedResult<IAuction>> {
  const res = await fetch(
    `http://localhost:6001/search?pageSize=4&pageNumber=${currentPage}`
  );
  if (!res.ok) throw new Error("Could not fetch auctions");
  const auctions: PagedResult<IAuction> = await res.json();
  return auctions;
}
