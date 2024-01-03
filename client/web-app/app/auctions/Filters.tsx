import { Button, ButtonGroup } from "flowbite-react";

type Props = {
    pageSize: number;
    setPageSize: (value: number) => void;
}

const pageSizeButtons = [4, 8, 12];

export default function Filters({pageSize, setPageSize}:Props): JSX.Element
{
    return (
        <div className="flex justify-between items-center mb-4">
            <div>
                <span className="uppercase text-sm text-gray-500 mr-2">Page size</span>
                <ButtonGroup>
                    {pageSizeButtons.map((value: number, i:number) => (
                        <Button
                            key={i}
                            color={`${pageSize === value ? 'red' : 'gray'}`}
                            onClick={() => setPageSize(value)}
                        >
                            {value}
                        </Button>
                    ))}
                </ButtonGroup>
            </div>
        </div>
    )
}