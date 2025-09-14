import { useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const runSimulation = async () => {
    setLoading(true);
    const res = await fetch("https://YOUR-BACKEND.onrender.com/provision");
    const data = await res.json();
    setUsers(data);
    setLoading(false);
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "2rem" }}>
      <h1>HR Feed Simulation</h1>
      <p>This simulates Joiner Lifecycle (HR → IAM Provisioning).</p>
      <button onClick={runSimulation} style={{ padding: "10px", cursor: "pointer" }}>
        {loading ? "Processing..." : "Run Simulation"}
      </button>
      <ul style={{ marginTop: "20px" }}>
        {users.map(u => (
          <li key={u.id}>
            <b>{u.name}</b> → {u.department} → {u.role}
          </li>
        ))}
      </ul>
    </div>
  );
}
