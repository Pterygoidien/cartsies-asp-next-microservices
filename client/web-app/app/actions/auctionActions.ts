"use server";

import { PagedResult } from "@/types";
/**
 * Fetches data from the server based on the provided query.
 * @param query - The query string to be appended to the URL.
 * @returns A promise that resolves to a PagedResult of IAuction objects.
 * @throws An error if the fetch request fails.
 */
export async function getData(query: string): Promise<PagedResult<IAuction>> {
  const res = await fetch(`http://localhost:6001/search${query}`);
  if (!res.ok) throw new Error("Could not fetch auctions");
  const auctions: PagedResult<IAuction> = await res.json();
  return auctions;
}
