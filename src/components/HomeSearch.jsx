'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';

export default function HomeSearch() {
  const router = useRouter();
  const [input, setInput] = useState('');
  const [randomSearchLoading, setRandomSearchLoading] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }

  async function randomSearch() {
    setRandomSearchLoading(true);
    const response = await fetch('https://random-word-api.herokuapp.com/word')
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  }

  return (
    <>
      <form
        className='flex w-full items-center mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg: max-w-2xl'
        onSubmit={handleSubmit}
      >
        <AiOutlineSearch className='text-xl text-gray-500 mr-3' />
        <input
          type='text'
          className='flex-grow focus:outline-none'
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <BsFillMicFill />
      </form>

      <div className='flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row sm:mt-8'>
        <button onClick={handleSubmit} className='btn'>
          Google Search
        </button>
        <button
          onClick={randomSearch}
          disabled={randomSearchLoading}
          className='btn flex items-center justify-center disabled:opacity-80'
        >
          {randomSearchLoading ? (
            <img
              src='spinner.svg'
              alt='Loading...'
              className='h-6 text-center'
            />
          ) : (
            'I Am Feeling Lucky'
          )}
        </button>
      </div>
    </>
  );
}
