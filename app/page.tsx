"use client";
import React from "react";

import { Ready } from "./components/Ready";

import { AdviceContextProvider } from "./contexts/Advice";
import { ReportContextProvider } from "./contexts/Report";
import { PersonContextProvider } from "./contexts/Person";
import { CompanyContextProvider } from "./contexts/CompanyContext";

export default function Home() {
  return (
    <CompanyContextProvider>
      <PersonContextProvider>
        <AdviceContextProvider>
          <ReportContextProvider>
            <main className='mt-5 sm:w-[95%] md:w-[90%] lg:w-[90%] xl:w-[85%] 2xl:w-[60%] justify-self-center'>
              <Ready />
            </main>
          </ReportContextProvider>
        </AdviceContextProvider>
      </PersonContextProvider>
    </CompanyContextProvider>
  );
}
