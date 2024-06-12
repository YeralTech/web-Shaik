import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primary-primary bg-opacity-50 z-50">
      <div className="bg-primary-primary  rounded-lg shadow-lg relative w-1/4 p-10 ">
        <button
          className="absolute top-2 right-2 text-secondary-light text-4xl hover:text-gray-700"
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
