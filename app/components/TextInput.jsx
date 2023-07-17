import React from "react";

const TextInput = ({ type, placeholder }) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        placeholder={placeholder}
        className="border border-gray rounded-lg px-2.5 py-1.5 w-full"
      />
    </div>
  );
};

export default TextInput;
