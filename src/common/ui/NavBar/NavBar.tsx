import Image from 'next/image'
import { NavBarProps } from './Interfaces'
import LangBtn from '../LangBtn/LangBtn'

export default function NavBar({
  logo = '/en/logo-teloa.svg',
}: NavBarProps) {
  return (
    <div className="flex justify-between items-center h-16 pr-1 desktop:pl-1 desktop:pr-4 desktop:h-[4.75rem] z-10">
      <div className="flex items-center justify-center">
        <Image
          src={logo}
          alt="logo"
          width={98}
          height={22}
          priority
          className="block mx-2 desktop:hidden"
        />

        <Image
          src={logo}
          alt="logo"
          width={115}
          height={26}
          priority
          className="hidden desktop:block desktop:mx-3"
        />
      </div>

      <LangBtn />
    </div>
  )
}
