import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="flex text-6xl text-primary h-screen justify-center items-center ">
        Welcome to Code CLA!
      </h1>
    </div>
  );
}
