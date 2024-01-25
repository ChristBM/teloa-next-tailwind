'use client'

import { LangBtnProps } from "./Interfaces"
import useLangBtn from "./useLangBtn.vm"

export default function LangBtn({
  enLabel = 'English',
  esLabel = 'Español',
}: LangBtnProps) {
  const { lang, handleBtnClick } = useLangBtn()

  return (
    <button
      onClick={handleBtnClick}
      className="flex items-center justify-center h-fit py-1 px-3 border border-solid rounded-2 bg-arroz text-base text-center capitalize font-semibold leading-6 text-ballena hover:bg-lenguado"
    >
      {lang ==='es' && enLabel}
      {lang ==='en' && esLabel}
    </button>
  )
}