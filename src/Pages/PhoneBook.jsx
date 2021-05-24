import React, { useState } from "react";

// Utils

// Components
import GreenButton from "Components/GreenButton";
import Table from "Components/PhoneBookComponents/Table/Table";
import CreateModal from "Components/PhoneBookComponents/CreateModal";

export default function PhoneBook() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <div className="lg:p-16 flex flex-col lg:flex-row">
        <div className="flex flex-col items-center w-full lg:w-1/5 lg:mr-10 p-5 lg:p-0">
          <div className="w-full">
            <GreenButton
              onClickFunction={() => setModalIsOpen(true)}
              text="+ Create contact"
            />
          </div>
          <div className="flex justify-center items-center bg-green-100 bg-opacity-50 w-full py-5 rounded-md mt-3">
            <span className="text-green-600 text-xl font-bold">Contacts</span>
          </div>
        </div>
        <div className=" w-full lg:w-4/5">
          <Table />
        </div>
      </div>
      <CreateModal
        modalIsOpen={modalIsOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
}
