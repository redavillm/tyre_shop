import { Modal } from "antd";

export const NewTyreModal = ({ open, onOk, onCancel }) => {
  return (
    <>
      <Modal
        title="Укажите данный для новой позиции"
        open={open}
        onOk={onOk}
        onCancel={onCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
