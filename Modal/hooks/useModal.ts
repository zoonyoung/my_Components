import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const useModal = (modal: React.ReactNode) => {
  const modalContext = useContext(ModalContext);
  if (modalContext) {
    const { registerModal } = modalContext;
    const openModal = () => registerModal(modal);
    const closeModal = () => registerModal(null);
    return { openModal, closeModal };
  }
  throw new Error("error");
};
export default useModal;
