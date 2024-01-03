'use client'
import { useParamsStore } from '@/hooks/useParamsStore';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
export default function Search(): JSX.Element {
    
    const setParams = useParamsStore(state => state.setParams);
    const setSearchValue = useParamsStore(state => state.setSearchValue);
    const searchValue = useParamsStore(state => state.searchValue);

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>):void {
        setSearchValue(e.target.value);
    }
    function search(): void {
        setParams({searchTerm: searchValue});
    }

    return (
        <div className='flex w-[50%] items-center border-2 rounded-full py-2 shadow-sm'>
            <input
                onChange={onChangeHandler}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && search()}
                value={searchValue}
                type="text"
                placeholder="Search for cars by make, model or color"
                className="flex-grow pl-5 bg-transparent focus:outline-none border-transparent focus:border-transparent focus:ring-0 text-sm text-gray-600 placeholder-gray-400"
            />
            <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => search()}>
                <FaSearch size={35} className='bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2' />
            </button>
        </div>
    )
}
