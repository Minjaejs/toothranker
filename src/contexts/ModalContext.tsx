import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  modalType: string | null;
  openModal: (type: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modalType, setModalType] = useState<string | null>(null);

  const openModal = (type: string) => {
    setModalType(type);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalType(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <ModalContext.Provider value={{ modalType, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};