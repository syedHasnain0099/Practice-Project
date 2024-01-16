import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(({ children }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog}>
      <div className="bg-white p-8 rounded-lg max-w-md">
        {children}
        <form method="dialog">
          <button className="mt-4 p-2 bg-blue-500 text-white rounded-md">
            Close
          </button>
        </form>
      </div>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
