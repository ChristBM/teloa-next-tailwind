import { usePathname, useRouter } from "next/navigation"

export default function useLangBtn() {
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleBtnClick = () => {
    const lang = pathname.split('/')[1] === 'en' ? 'es' : 'en';

    replace(`/${lang}/${pathname.split('/').slice(2).join('/')}`)
  }

  return { lang: pathname.split('/')[1] , handleBtnClick }
}