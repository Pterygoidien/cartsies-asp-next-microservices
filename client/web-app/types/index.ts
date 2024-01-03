export type PagedResult<T> = {
  results: T[];
  pageCount: number;
  totalCount: number;
};

export type TAuction = {
  reservePrice: number;
  seller: string;
  winner?: string | null;
  soldAmount?: number;
  currentHighBid?: number;
  createdAt: string;
  updatedAt: string;
  auctionEnd: string;
  status: AuctionStatus;
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  imageUrl: string;
  id: string;
};
