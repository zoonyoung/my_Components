"use client";
import { createContext, useState, ReactNode } from "react";
import WithModal from "../WithModal";

interface ModalContextType {
  modal: { Component: React.ComponentType<{ onClose: () => void }> | null };
  registerModal: (modal: React.ComponentType<{ onClose: () => void }>) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useState<{
    Component: React.ComponentType<{ onClose: () => void }> | null;
  }>({ Component: null });
  const registerModal = (
    Component: React.ComponentType<{ onClose: () => void }>,
  ) => setModal({ Component });
  const closeModal = () => setModal({ Component: null });

  return (
    <ModalContext.Provider value={{ modal, registerModal, closeModal }}>
      {children}
      {modal.Component && <WithModal />}
    </ModalContext.Provider>
  );
};
