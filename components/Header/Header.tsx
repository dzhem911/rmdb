import Link from 'next/link'
import Image from 'next/image'
import SearchInput from "../SearchInput/SearchInput";
import React from "react";

type Props = {
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({setQuery}: Props) => (
  <header className='sticky flex top-0 z-40 w-full h-24 bg-zinc-900'>
    <div className='flex justify-between w-full h-full max-w-7xl m-auto px-4'>
      <Link href='/'>
        <div className='flex items-center cursor-pointer'>
          <div className='invisible md:visible'>
            <Image width='150' height='50' src='/rmdb-logo.svg' alt='rmbd-logo' />
          </div>
          <div className='absolute md:invisible pt-2'>
            <Image width='42' height='42' src='/rmdb-logo-small.svg' alt='rmdb-logo-small' />
          </div>
        </div>
      </Link>
    </div>
    {
      setQuery ? (
        <div className='relative flex items-center'>
          <SearchInput setQuery={setQuery} />
        </div>
      ) : null
    }
  </header>
)

export default Header