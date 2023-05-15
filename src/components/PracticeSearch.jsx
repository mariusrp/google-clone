'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function PracticePage() {
  const router = useRouter();
  const [input, setInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }

  return (
    <div className='text-center mt-10'>
      <h1 className='text-6xl'>Google search</h1>
      <form
        onSubmit={handleSubmit}
        className='w-80 bg-blue-100 mx-auto p-5 mt-10 rounded-lg'
      >
        <input
          type='text'
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className='rounded-full w-40 outline-none border-gray-200 border p-1'
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
