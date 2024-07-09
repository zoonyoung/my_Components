"use client";
import { createContext, useState } from "react";
import WithModal from "../WithModal";

interface ModalContextType {
  registerModal: (modal: React.ReactNode) => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState<React.ReactNode>(null);
  const registerModal = (modal: React.ReactNode) => setModal(modal);
  const closeModal = () => setModal(null);

  return (
    <ModalContext.Provider value={{ registerModal }}>
      {children}
      {modal && <WithModal render={modal} onClose={closeModal} />}
    </ModalContext.Provider>
  );
};
