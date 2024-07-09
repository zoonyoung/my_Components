import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const useModal = (modal: React.ComponentType<{ onClose: () => void }>) => {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    throw new Error("ModalContext is null");
  }

  const { registerModal, closeModal } = modalContext;
  const openModal = () => registerModal(modal);

  return { openModal, closeModal };
};

export default useModal;
