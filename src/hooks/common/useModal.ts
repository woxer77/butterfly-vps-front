import React from 'react';

export const useModal = (initialState: boolean = false) => {
  const [showModal, setShowModal] = React.useState<boolean>(initialState);

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  };
  return { showModal, openModal, closeModal };
};
