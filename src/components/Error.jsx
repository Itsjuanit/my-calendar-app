import React from "react";

export const Error = ({ children }) => {
  return (
    <div className="bg-red-800 text-center text-white p-3 uppercase font-bold mb-3 rounded-md">
      <p>{children}</p>
    </div>
  );
};
