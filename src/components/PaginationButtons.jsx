'use client';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import {
  RiCheckboxBlankCircleFill,
  RiCheckboxBlankCircleLine,
} from 'react-icons/ri';

export default function PaginationButtons() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const startIndex = +searchParams.get('start') || 1;
  const router = useRouter();

  const handleOnClick = (index) => {
    index = index === 1 ? index : 10 * index + 1;
    router.push(`${pathname}?searchTerm=${searchTerm}&start=${index}`);
  };

  return (
    <div className='text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0'>
      {startIndex >= 10 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
        >
          <div className='flex flex-col cursor-pointer item-center hover_underline'>
            <BsChevronLeft className='h-5' />
            <p> Previous</p>
          </div>
        </Link>
      )}

      <div className='flex text-md'>
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className='flex flex-col justify-center items-center group cursor-pointer'
            onClick={() => handleOnClick(index + 1)}
          >
            {Math.floor(startIndex / 10) === index + 1 ||
            startIndex === index + 1 ? (
              <RiCheckboxBlankCircleFill />
            ) : (
              <RiCheckboxBlankCircleLine className='group-hover:bg-blue-700 group-hover:opacity-60 rounded-full' />
            )}
            <p className='group-hover:underline text-sm'>{index + 1}</p>
          </div>
        ))}
      </div>

      {startIndex <= 90 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
        >
          <div className='flex flex-col cursor-pointer item-center hover_underline'>
            <BsChevronRight className='h-5' />
            <p> Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}
