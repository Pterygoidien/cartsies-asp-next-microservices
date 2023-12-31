'use client';

import { useParamsStore } from "@/hooks/useParamsStore";
import Heading from "./Heading";
import { Button } from "flowbite-react";
import { signIn } from "next-auth/react";

type Props = {
    title?: string;
    subtitle?: string;
    showReset?: boolean;
    showLogin?: boolean;
    callbackUrl?: string;
}

export default function EmptyFilter({ 
    title = 'No results found', 
    subtitle = 'Try adjusting your search criteria', 
    showReset,
    showLogin,
    callbackUrl
}: Props): JSX.Element {
    
    const reset = useParamsStore(state => state.reset);
    return (
        <div className="flex flex-col h-[40vh] gap-2 justify-center items-center shaddow-lg">
            <Heading title={title} subtitle={subtitle} center />
            <div className="mt-4">
                {showReset && (
                    <Button outline onClick={reset}>Reset filters</Button>
                )}
                {showLogin && (
                    <Button outline onClick={()=>signIn('id-server', {callbackUrl})}>Login</Button>
                 )}
            </div>
    </div>
   
  )
};
