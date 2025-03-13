import React, { useState } from "react";
import { ConfirmContainer } from "./style";
import ConfirmOrder from "./ConfirmOrder";
import ReadyOrder from "./ReadyOrder";

const Order = ({ showModal, setShowModal }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <>
      <ConfirmContainer.ModalOverlay
        show={showModal}
        onClick={() => setShowModal(false)}
      />
      <ConfirmContainer.ModalContent show={showModal}>
        <ConfirmContainer.CloseButton onClick={() => setShowModal(false)}>
          ✖
        </ConfirmContainer.CloseButton>

        {isConfirmed ? (
          <ReadyOrder />
        ) : (
          <ConfirmOrder setIsConfirmed={setIsConfirmed} />
        )}
      </ConfirmContainer.ModalContent>
    </>
  );
};

export default Order;
