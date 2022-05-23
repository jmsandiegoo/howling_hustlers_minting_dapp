import React from "react";
import { Modal } from "../../components/Modal";
import { Button } from "../../components/Button";
import fullMoonSvg from "../../assets/images/full-moon.svg";
import { ReactComponent as CloseIconSvg } from "../../assets/images/close-icon.svg";

const MintModalHeader = ({ handleClose }) => {
  return (
    <header className="modal__header">
      <CloseIconSvg onClick={() => handleClose()} />
    </header>
  );
};

const MintModalContent = ({ children }) => {
  return <section className="modal__content">{children}</section>;
};

const MintModalComponent = ({ handleClose, isMinting, isMinted }) => {
  let modalContent = null;

  if (isMinting) {
    modalContent = (
      <>
        <img className="modal__loading" src={fullMoonSvg} />
        <p className="modal__">Minting...</p>
      </>
    );
  }

  if (isMinted) {
    modalContent = (
      <>
        <p>Aw-oooh! Mint Successful.</p>
        <a href="#">Check your hustler(s) now</a>
      </>
    );
  }

  return (
    <Modal classNameProps={["mintpage__modal"]}>
      {isMinted && <MintModalHeader handleClose={handleClose} />}
      <MintModalContent>{modalContent}</MintModalContent>
    </Modal>
  );
};

export { MintModalComponent };
