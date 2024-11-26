import React from "react";

export default function LoginRegisterLayout({ children }) {
  return (
    <div>
      <div className="grid grid-cols-2 w-full h-screen grid-rows-1 bg-main">
        <div className="flex items-center justify-center">
          <img src="./src/assets/coding.png" />
        </div>

        <div className="flex items-center justify-center bg-background">
          <div className=" flex bg-white max-w-sm w-screen h-2/5 justify-center rounded-lg shadow-lg flex-col">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
