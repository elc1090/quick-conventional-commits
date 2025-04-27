import React from "react";

export function Card({ children, ...props }) {
  return (
    <div
      {...props}
      className="bg-gray-800 rounded-xl border border-gray-700 p-4 hover:shadow-lg transition cursor-pointer"
    >
      {children}
    </div>
  );
}