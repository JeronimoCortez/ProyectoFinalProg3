import { useState } from "react";

export default function useModal(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string>("");

  const openModal = (modalId: string) => {
    setIsModalOpen(true);
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveModal("");
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    activeModal
  }
}