'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const [term, setTerm] = useState(searchTerm || '');

  function handleSubmit(e) {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  }
  return (
    <form
      className='flex border border-gray-200 rounded-full shadow-md hover:shadow-lg active:shadow-lg py-3 px-5 mx-5 max-w-2xl'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        className='flex-grow focus:outline-none'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <span className='sm:border-r-2 sm:px-2'>
        <RxCross1
          className='text-xl text-gray-500 hover:cursor-pointer'
          onClick={(e) => setTerm('')}
        />
      </span>
      <span className='pl-2'>
        <AiOutlineSearch
          className='text-xl text-blue-500 hidden sm:block cursor-pointer'
          onClick={handleSubmit}
        />
      </span>
    </form>
  );
}
