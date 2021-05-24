import React, { useState } from "react";

// Utils
import { Card, Modal } from "@material-ui/core";
import { styled, makeStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

// Components
import Input from "Components/Input";
import GreenButton from "Components/GreenButton";
import GrayButton from "Components/GrayButton";

// Apis
import { createContact } from "Routes/contacts";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    "& > div": {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "100%",
      },
    },
  },
}));

const ModalCard = styled(Card)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "40rem",
  border: "2px solid rgba(224, 224, 224, 0.5)",
  boxShadow: "none",
});

export default function CreateModal({ handleCloseModal, modalIsOpen }) {
  const classes = useStyles();

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [address, setAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleCreateContact() {
    try {
      setIsLoading(true);
      await createContact({
        firstName,
        lastName,
        phoneNumber,
        address,
        userId: uuidv4(),
      });
      handleCloseModal();
      setIsLoading(false);
    } catch (err) {
      console.warn(err);
      setIsLoading(false);
    }
  }

  return (
    <Modal
      open={modalIsOpen}
      onClose={handleCloseModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className="relative w-full h-full">
        <div className={classes.root}>
          <ModalCard>
            <div className="mx-8 md:mx-14">
              <div className="flex justify-center items-center mt-16 text-xl">
                <Input
                  className="mr-5"
                  placeholder="First Name"
                  setInput={setFirstName}
                />
                <Input placeholder="Last Name" setInput={setLastName} />
              </div>
              <div className="flex flex-col justify-center items-center  text-xl">
                <Input placeholder="Phone Number" setInput={setPhoneNumber} />
                <Input placeholder="Address" setInput={setAddress} />
              </div>
              <div className="flex justify-center items-center mt-2 mb-5">
                <GreenButton
                  onClickFunction={handleCreateContact}
                  text={isLoading ? "Loading..." : "Create"}
                />
              </div>
              <div className="flex justify-center items-center mt-2 mb-16">
                <GrayButton onClickFunction={handleCloseModal} text="Cancel" />
              </div>
            </div>
          </ModalCard>
        </div>
      </div>
    </Modal>
  );
}

CreateModal.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.text,
};
