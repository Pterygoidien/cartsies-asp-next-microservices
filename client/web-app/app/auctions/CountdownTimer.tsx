'use client';
import Countdown, { zeroPad } from 'react-countdown';

type RendererProps = {
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
    completed: boolean
}

type CountdownProps = {
    auctionEnd: string
}

const renderer: React.FC<RendererProps> = ({ days, hours, minutes, seconds, completed }: RendererProps): JSX.Element => {
    return (
        <div className={`border-2 border-white text-white py-1 px-2 rounded-lg flex justify-center
            ${completed ? 'bg-red-500' : (days===0 && hours < 10) ? 'bg-amber-600': 'bg-green-600'}
        `}>
            {completed ? (<span>Auction Finished</span>) : (<span suppressHydrationWarning={true}>{zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span>)}
         </div>
    );
};

const CountdownTimer: React.FC<CountdownProps> = ({ auctionEnd }: CountdownProps): JSX.Element => <Countdown date={auctionEnd} renderer={renderer} />;

export default CountdownTimer;
