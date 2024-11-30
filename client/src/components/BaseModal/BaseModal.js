import Modal from "react-modal";

const customStyles = {
  content: {
    width: "900px",
    height: "600px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const BaseModal = ({ children, isModalCartOpen, closeModal }) => {
  return (
    <Modal
      style={customStyles}
      isOpen={isModalCartOpen}
      onRequestClose={closeModal}
    >
      {children}
    </Modal>
  );
};
