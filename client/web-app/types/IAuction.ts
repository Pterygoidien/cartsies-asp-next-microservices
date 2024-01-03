interface IAuction {
  reservePrice: number;
  seller: string;
  winner?: string | null;
  soldAmount?: number;
  currentHighBid?: number;
  createdAt: Date;
  updatedAt: Date;
  auctionEnd: string;
  status: AuctionStatus;
  make: string;
  model: string;
  color: string;
  mileage: number;
  imageUrl: string;
  id: string;
  year: number;
}
