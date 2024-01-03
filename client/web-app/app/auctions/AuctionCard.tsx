import Image from "next/image"
import CountdownTimer from "./CountdownTimer"
import CarImage from "./CarImage"
import { TAuction } from "@/types"

type Props = {
    auction:IAuction
}

export default function AuctionCard({ auction }: Props): JSX.Element {
  return (  
    <a href="#" className="group">
      <article className="w-full bg-gray-200 aspect-w-16 aspect-h-10 rounded-lg overflow-hidden">
        <div>
          <CarImage imageUrl={auction.imageUrl} alt={`${auction.make} ${auction.model}`} />
          <div className="absolute bottom-2 left-2">
              <CountdownTimer auctionEnd={auction.auctionEnd} />
          </div>
        </div>         
      </article>

      <div className="flex justify-between items-center mt-4">
        <h3 className="text-gray-700">{auction.make}{' '}{auction.model}</h3>
        <p className="font-semibold text-sm">{auction.year}</p>
      </div>

    </a>
  )
} 