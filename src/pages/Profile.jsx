import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Map from "../components/heatMap";

export default function Profile() {
  const challenges = [
    { level: "Easy", progress: 75, color: "bg-green" },
    { level: "Moderate", progress: 25, color: "bg-orange" },
    { level: "Hard", progress: 5, color: "bg-red" },
  ];
  const [urlChange, setUrlChange] = useState("");

  function handleChange(e) {
    setUrlChange(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div>
      <Navbar />
      <div class="grid grid-cols-2">
        <div class="container">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="pic"
            class="rounded-full m-6"
            width={100}
            height={100}
          />
          <input type="file" value={urlChange} onChange={handleChange} />

          <div class="text-3xl m-5">Ben Goek</div>
          <div class="ml-4 mt-4">
            <div>first Name</div>
            <input
              type="text"
              placeholder="first name..."
              class="border-2 border-gray"
            />
          </div>
          <div class="ml-4 mt-4">
            <div>last Name</div>
            <input
              type="text"
              placeholder="last Name..."
              class="border-2 border-gray"
            />
          </div>
          <div class="ml-4 mt-4">
            <div>Email Address</div>
            <input
              type="email"
              placeholder="Email..."
              class="border-2 border-gray"
            />
          </div>
          <div class="ml-4 mt-4">
            <div>Description</div>
            <textarea placeholder="Description" class="border-2 border-gray" />
            <div>
              <button
                type="button"
                placeholder="Update"
                class="bg-blue text-white px-4 py-1 rounded "
              >
                Update
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-md w-full p-6 space-y-4 m-6 border-2 border-gray transition-none">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Completed challenges
          </h2>
          <div className="space-y-3 h-26">
            {challenges.map((challenge) => (
              <div key={challenge.level} className="space-y-2">
                <div className="flex justify-center items-center text-sm">
                  <span className="mr-2">{challenge.level}</span>
                  <span>{challenge.progress}%</span>
                </div>
                <div className="h-2 w-full bg-gray rounded-full overflow-hidden">
                  <div
                    className={`h-full ${challenge.color}`}
                    style={{ width: `${challenge.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <Map />
        </div>
      </div>
    </div>
  );
}
