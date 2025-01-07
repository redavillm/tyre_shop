import { useState } from "react";

export const useTyreModal = () => {
  const [isEditModal, setIsEditModal] = useState(false);
  const [isDeleteModal, setisDeleteModal] = useState(false);
  const [isNewTyreModal, setIsNewTyreModal] = useState(false);

  const editModalOptions = {
    show: () => setIsEditModal(true),
    accept: () => setIsEditModal(false),
    cancel: () => setIsEditModal(false),
  };

  const deleteModalOptions = {
    show: () => setisDeleteModal(true),
    accept: () => setisDeleteModal(false),
    cancel: () => setisDeleteModal(false),
  };

  const newTyreModalOptions = {
    show: () => setIsNewTyreModal(true),
    accept: () => setIsNewTyreModal(false),
    cancel: () => setIsNewTyreModal(false),
  };

  return {
    isEditModal,
    editModalOptions,
    isDeleteModal,
    deleteModalOptions,
    isNewTyreModal,
    newTyreModalOptions,
  };
};
