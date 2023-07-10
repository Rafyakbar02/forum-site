import React from "react";

const TextArea = () => {
  return (
    <div className="mb-4">
      <textarea
        id=""
        cols="30"
        rows="5"
        placeholder="Text (Optional)"
        className="border border-gray rounded-lg px-2.5 py-1.5 w-full"
      ></textarea>
    </div>
  );
};

export default TextArea;
