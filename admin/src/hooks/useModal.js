import { useState } from "react";

export const useModal = () => {
  const [isEditModal, setIsEditModal] = useState(false);
  const [isDeleteModal, setisDeleteModal] = useState(false);
  const [isNewProductModal, setIsNewProductModal] = useState(false);

  const editModalOptions = {
    show: () => setIsEditModal(true),
    close: () => setIsEditModal(false),
  };

  const deleteModalOptions = {
    show: () => setisDeleteModal(true),
    close: () => setisDeleteModal(false),
  };

  const newProductModalOptions = {
    show: () => setIsNewProductModal(true),
    close: () => setIsNewProductModal(false),
  };

  return {
    isEditModal,
    editModalOptions,
    isDeleteModal,
    deleteModalOptions,
    isNewProductModal,
    newProductModalOptions,
  };
};
