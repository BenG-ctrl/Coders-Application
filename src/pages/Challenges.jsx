import React from "react";
import Navbar from "../components/Navbar";

export default function Challenges() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2">
        <h1 className="text-4xl mt-5 absolute z-2">Challenges</h1>
        <span className="translate-y-[300%]">Select Category</span>
        <div className="flex translate-x-[-100%] translate-y-[500%]">
          <button>All</button>
          <button>data Structure</button>
          <button>math</button>
        </div>
        <div className="grid grid-cols-5 grid-rows-3 border-2 gap-10 w-3/4 absolute z-1 translate-y-[100%] mt-10 shadow-lg">
          <div className="grid-cols-1 ml-10 bg-dark-background">Status</div>
          <div className="grid-cols-1">Title</div>
          <div className="grid-cols-1">Category</div>
          <div className="grid-cols-1">Difficulty</div>
          <div className="grid-cols-1">Solution Rate</div>
        </div>
      </div>
    </div>
  );
}
