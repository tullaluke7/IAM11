import { useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const runSimulation = async () => {
    setLoading(true);
    const res = await fetch("https://YOUR-BACKEND-URL.onrailway.app/provision");
    const data = await res.json();
    setUsers(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-center">
          HR Feed Simulation
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          This demo simulates how an IAM system provisions users from an HR feed. 
          Click below to run the Joiner Lifecycle workflow.
        </p>

        <div className="flex justify-center">
          <button
            onClick={runSimulation}
            disabled={loading}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Processing..." : "Run Simulation"}
          </button>
        </div>

        {users.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Provisioned Users</h2>
            <ul className="space-y-3">
              {users.map((u) => (
                <li
                  key={u.id}
                  className="p-4 bg-gray-100 rounded-lg shadow-sm flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{u.name}</p>
                    <p className="text-sm text-gray-600">{u.department}</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                    {u.role}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <footer className="mt-8 text-gray-500 text-sm">
        Built with Java (Spring Boot) + React + TailwindCSS
      </footer>
    </div>
  );
}
