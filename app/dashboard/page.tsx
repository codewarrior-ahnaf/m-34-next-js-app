import React from "react";
import Link from "next/link";
import Counter from "../components/Counter";

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-center">Dashboard Page</h2>
      <Counter />
      <div>
        <ul className="m-6 p-4">
          <li>bal</li>
          <li>sal</li>
          <li>sal</li>
          <li>bal</li>
        </ul>
      </div>

      <div>
        <Link href="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Return
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
