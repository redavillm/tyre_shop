import { Modal } from "antd";

export const DeleteModal = ({ open, onOk, onCancel }) => {
  return (
    <Modal
      title="Подтверждение удаления"
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      okText="Удалить"
      cancelText="Отмена"
    >
      <p>Вы уверены, что хотите удалить этот товар?</p>
    </Modal>
  );
};
