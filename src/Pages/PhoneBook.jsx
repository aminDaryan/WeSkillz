import React from "react";

// Utils

// Components
import GreenButton from "Components/GreenButton";
import Table from "Components/Table/Table";

export default function PhoneBook() {
  function handleCreateContact() {}
  
  return (
    <div className="p-16 flex">
      <div className="flex flex-col items-center w-1/5 mr-10">
        <div className="w-full">
          <GreenButton
            onClickFunction={handleCreateContact}
            text="+ Create contact"
          />
        </div>
        <div className="flex justify-center items-center bg-green-100 bg-opacity-50 w-full py-5 rounded-md mt-3">
          <span className="text-green-600 text-xl font-bold">Contacts</span>
        </div>
      </div>
      <div className="w-4/5">
        <Table />
      </div>
    </div>
  );
}
