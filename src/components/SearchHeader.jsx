import Image from 'next/image';
import Link from 'next/link';
import { RiSettings3Line } from 'react-icons/ri';
import { TbGridDots } from 'react-icons/tb';
import SearchBox from './SearchBox';
import SearchHeaderOptions from './SearchHeaderOptions';

export default function SearchHeader() {
  return (
    <header className='sticky top-0 bg-white p-2 border-b'>
      <div className='flex w-full p-6 items-center justify-between'>
        <Link href={'/'}>
          <Image
            width='100'
            height='60'
            src='https://media.snl.no/media/129947/standard_1280px-Google_2015_logo.svg.png'
            alt='Google logo'
            className='object-fill'
          />
        </Link>
        <div className='flex-1 ml-5'>
          <SearchBox />
        </div>
        <div className='hidden md:inline-flex space-x-2'>
          <RiSettings3Line className='header-icon' />
          <TbGridDots className='header-icon' />
        </div>
        <button className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all ml-2'>
          Sign in
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
