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
            <main className='px-12 pt-5'>
              <Ready />
            </main>
          </ReportContextProvider>
        </AdviceContextProvider>
      </PersonContextProvider>
    </CompanyContextProvider>
  );
}
