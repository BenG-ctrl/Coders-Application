import React from "react";
import Navbar from "../components/Navbar";

export default function Leaderboard() {
  const dummyData = [
    {
      rank: 1,
      first_name: "John",
      last_name: "Doe",
      score: 400,
      solved_challenges: 150,
    },
    {
      rank: 2,
      first_name: "Alice",
      last_name: "Smith",
      score: 350,
      solved_challenges: 140,
    },
    {
      rank: 3,
      first_name: "Emma",
      last_name: "Johnson",
      score: 320,
      solved_challenges: 135,
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen b py-5 bg-background">
        <h1 className="text-2xl font-bold mb-4 px-2 text-start">Leaderboard</h1>
        <table className="table-auto w-full border-collapse shadow-lg">
          <thead>
            <tr className="shadow-lg">
              <th className="px-4 py-2">Rank</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Score</th>
              <th className="px-4 py-2">Solved Challenges</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="px-4 py-2">{item.rank}</td>
                <td className="px-4 py-2">
                  {item.first_name} {item.last_name}
                </td>
                <td className="px-4 py-2">{item.score}</td>
                <td className="px-4 py-2">{item.solved_challenges}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
