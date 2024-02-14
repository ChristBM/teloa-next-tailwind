import Image from 'next/image'
import LangBtn from '@/ui/LangBtn'
import { NavBarProps } from './Interfaces'

export default function NavBar({
  lng,
  logo = '/en/logo-teloa.svg',
  actualPath,
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

      <LangBtn lng={lng} actualPath={actualPath} />
    </div>
  )
}
