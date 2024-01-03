import { useParamsStore } from "@/hooks/useParamsStore";
import { Button, ButtonGroup } from "flowbite-react";

const pageSizeButtons = [4, 8, 12];

export default function Filters(): JSX.Element
{
    const pageSize = useParamsStore(state => state.pageSize);
    const setParams = useParamsStore(state => state.setParams);
    return (
        <div className="flex justify-between items-center mb-4">
            <div>
                <span className="uppercase text-sm text-gray-500 mr-2">Page size</span>
                <ButtonGroup>
                    {pageSizeButtons.map((value: number, i:number) => (
                        <Button
                            key={i}
                            color={`${pageSize === value ? 'red' : 'gray'}`}
                            onClick={() => setParams({pageSize: value})}
                        >
                            {value}
                        </Button>
                    ))}
                </ButtonGroup>
            </div>
        </div>
    )
}