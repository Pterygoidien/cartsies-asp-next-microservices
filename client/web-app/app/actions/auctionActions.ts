"use server";

import { PagedResult } from "@/types";

/**
 * Fetches auctions from the server
 * @param currentPage
 * @param pageSize
 * @returns {Promise<PagedResult<IAuction>>}
 */

export async function getData(
  currentPage: number,
  pageSize: number
): Promise<PagedResult<IAuction>> {
  const res = await fetch(
    `http://localhost:6001/search?pageSize=${pageSize}&pageNumber=${currentPage}`
  );
  if (!res.ok) throw new Error("Could not fetch auctions");
  const auctions: PagedResult<IAuction> = await res.json();
  return auctions;
}
