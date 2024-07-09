import useKeydown from "@/hooks/useKeydown";
import usePreventScroll from "@/hooks/usePreventScroll";
import { useContext } from "react";
import { ModalContext } from "./context/ModalContext";
import styles from "./WithModal.module.scss";

const WithModal = () => {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    return null;
  }

  const { modal, closeModal } = modalContext;
  const Component = modal.Component;

  usePreventScroll();
  useKeydown("Escape", closeModal);

  const handleClickOutside = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={styles.container} onClick={handleClickOutside}>
      {Component && <Component onClose={closeModal} />}
    </div>
  );
};

export default WithModal;
