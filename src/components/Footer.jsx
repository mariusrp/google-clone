import CountryLookUp from './CountryLookUp';

export default function Footer() {
  return (
    <footer className='absolute bottom-0 w-full p-3 text-[#70757a] text-sm bg-[#f2f2f2]'>
      <div className='border-b px-8 py-3'>
        <CountryLookUp />
      </div>
      <div className='flex flex-col sm:flex-row justify-between items-center px-6 lg:px-0'>
        <div className='text-center sn:text-left'>
          <ul className='flex justify-center sm:justify-start space-x-6 py-2'>
            <li className='link'>Info</li>
            <li className='link'>Annonsering</li>
            <li className='link'>Bedrifter</li>
            <li className='link'>Slik fungerer Søk</li>
          </ul>
        </div>
        <div className='text-center sm:text-right'>
          <ul className='flex justify-center sm:justify-start space-x-6 py-2'>
            <li className='link'>Personvern</li>
            <li className='link'>Vilkår</li>
            <li className='link'>Instillinger</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
