'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { MdKeyboardArrowLeft } from 'react-icons/md';
export default function SearchHeaderOptions() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');

  function selectTab(tab) {
    router.push(`/search/${tab}/?searchTerm=${searchTerm}`);
  }
  return (
    <div className='flex space-x-2 select-none w-full  justify-start pl-40 text-gray-700'>
      {pathname !== '/search/web' && (
        <div
          className='search-header-option border-none flex space-x-1 items-center justify-center'
          onClick={() => selectTab('web')}
        >
          <MdKeyboardArrowLeft className='text-2xl text-gray-600' />
          <>Søk</>
        </div>
      )}

      <div
        onClick={() => selectTab('image')}
        className={`search-header-option ${
          pathname === '/search/image' &&
          '!text-[#468ded] !bg-[#e8f0fe] border-none'
        }`}
      >
        Images
      </div>

      <div
        onClick={() => selectTab('video')}
        className={`search-header-option ${
          pathname === '/search/video' &&
          '!text-[#468ded] !bg-[#e8f0fe] border-none'
        }`}
      >
        Videos
      </div>

      <div
        onClick={() => selectTab('news')}
        className={`search-header-option ${
          pathname === '/search/news' &&
          '!text-[#468ded] !bg-[#e8f0fe] border-none'
        }`}
      >
        News
      </div>
    </div>
  );
}
