import useKeydown from "@/hooks/useKeydown";
import usePreventScroll from "@/hooks/usePreventScroll";
import styles from "./WithModal.module.scss";

const WithModal = ({ render, onClose }: { render: React.ReactNode; onClose: () => void }) => {
  usePreventScroll();
  useKeydown("Escape", onClose);

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return (
    <div className={styles.container} onClick={handleClickOutside}>
      {render}
    </div>
  );
};

export default WithModal;
