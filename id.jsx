import { useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  const runSimulation = async () => {
    const res = await fetch("https://your-backend-url.onrender.com/provision");
    const data = await res.json();
    setUsers(data);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>HR Feed Simulation</h1>
      <button onClick={runSimulation}>Run Simulation</button>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.name} → {u.department} → {u.role}
          </li>
        ))}
      </ul>
    </div>
  );
}
