import { Suspense } from "react";
import { Metadata } from "next";
import ModeBtn from "@/common/ui/ModeBtn/ModeBtn";
import NavBar from "@/common/ui/NavBar/NavBar";
import HeaderSection from "@/common/ui/HeaderSection/HeaderSection";
import { Locale } from "../../../../../i18n-config";

export const metadata: Metadata = {
  title: 'Acquisition',
};

export default async function Page({ params } : { params: { lang: Locale }}) {
  return (
    <div className="relative bg-gradient-header">
      <div className="fixed w-max h-max right-4 bottom-4 z-10">
        <ModeBtn />
      </div>

      <NavBar />

      <Suspense key={params.lang + 'header'} fallback={<p>Loading...</p>}>
        <HeaderSection lang={params.lang} />
      </Suspense>
    </div>
  );
}
