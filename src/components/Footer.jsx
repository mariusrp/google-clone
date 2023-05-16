import CountryLookUp from './CountryLookUp';

export default function Footer() {
  return (
    <footer className='absolute bottom-0 w-full space-y-2 bg-[#f2f2f2] p-3 text-[#70757a] text-sm'>
      <div className='border-b px-8 py-3'>
        <CountryLookUp />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <div className='order-1 lg:order-2 lg:col-start-2 text-center'>
          <p>CO2-nøytral siden 2007</p>
        </div>
        <div className='order-2 lg:order-1 lg:col-start-1 lg:col-end-2'>
          <ul className='flex items-center justify-center lg:justify-start space-x-6'>
            <li className='link'>Info</li>
            <li className='link'>Annonsering</li>
            <li className='link'>Bedrifter</li>
            <li className='link'>Slik fungerer Søk</li>
          </ul>
        </div>
        <div className='order-3 lg:order-3 lg:col-start-3 lg:col-end-4'>
          <ul className='flex items-center justify-center lg:justify-start space-x-6'>
            <li className='link'>Personvern</li>
            <li className='link'>Vilkår</li>
            <li className='link'>Instillinger</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
