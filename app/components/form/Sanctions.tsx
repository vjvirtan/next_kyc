import { UsePersonsContex } from "@/app/contexts/Person";
import React from "react";

const Sanctions = () => {
  const { usePerson } = UsePersonsContex();

  const show = (
    <>
      <div
        className='px-1 bg-base-mid flex justify-center
       mt-5 border-solid border-y-2 border-base-dark 
       max-h-10 text-white 
       hover:bg-base-light  hover:text-black hover:ring-2 ring-red-200'
      >
        <div className='m-1'> Check Sanctions</div>
        <label className='text-sm text-red-300'>offline</label>
      </div>
    </>
  );

  return usePerson.person.personId == "" ? <></> : show;
};

export default Sanctions;
