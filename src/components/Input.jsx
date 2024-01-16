import React, { forwardRef } from "react";

const Input = forwardRef(({ label, textarea, ...props }, ref) => {
  return (
    <p className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      {textarea ? (
        <textarea
          ref={ref}
          className="resize-none border rounded-md w-full py-2 px-3"
          {...props}
        ></textarea>
      ) : (
        <input
          ref={ref}
          className="border rounded-md w-full py-2 px-3"
          type="text"
          {...props}
        />
      )}
    </p>
  );
});

export default Input;
