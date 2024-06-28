import React from "react";


const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primary-background bg-opacity-90 z-50">
      <div className="rounded-lg relative px-10 py-4 w-auto desktop:w-1/2 tablet:w-2/4">
        <button
          className="absolute top-8 right-4 px-2 text-secondary-light text-4xl hover:bg-primary-hover bg-secondary-primary  rounded-3xl"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
