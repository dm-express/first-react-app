import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import UserDetailsComponent, { IsUserOnline } from "./components/userDetails";

// REACT BASICS
// 1. Components: Building blocks of React applications.
// 2. JSX (JavaScript XML): Syntax extension to write HTML inside JS.
// 3. State: Data managed within the component using useState.
// 4. Hooks: Special functions that manage state and lifecycle in functional components.
//    - useState: Manages component-level state.
//    - useEffect: Handles side effects like API calls, subscriptions, etc.

// COMMON CONCEPTS IN REAL PROJECTS
// - Landing Pages: Used for marketing or showcasing services.
// - Common Layouts: Navigation bar, sidebar, styling consistency.
// - Component Libraries: Material UI, ShadCn UI (Tailwind), Magic UI, etc.

function App() {
  // Local state variables
  const [count, setCount] = useState(0);
  const [name, setName] = useState(""); // currently unused, but useful for user input later

  // useEffect: Called AFTER the component is rendered
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  useEffect(() => {
    console.log("Count updated to:", count);
  }, [count]);

  // Event handler for demo
  const addNumbers = () => {
    alert(2 + 3); // simple alert demo
  };

  // Array of user details
  const userDetailsList = [
    {
      name: "Ruttvik",
      department: "React",
      isOnline: true,
    },
    {
      name: "Shubham",
      department: "NodeJs",
      isOnline: false,
    },
    {
      name: "Adesh",
      department: "Marketing",
      isOnline: false,
    },
  ];

  return (
    <>
      {/* Logo Section */}
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>

      <h1>DM Express</h1>

      {/* Counter Section */}
      <div className="card">
        <button onClick={() => setCount((prev) => prev + 1)}>
          count is {count}
        </button>
        <button onClick={addNumbers}>Alert</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test live updates.
        </p>
      </div>

      <p className="read-the-docs">Click on the Vite logo to learn more</p>

      {/* Render list of user details */}
      {userDetailsList.map((user) => {
        const empId = `${user.name}-${user.department}`; // unique key if needed
        return (
          <div key={empId}>
            <UserDetailsComponent
              department={user.department}
              name={user.name}
            />
            <IsUserOnline isOnline={user.isOnline} />
          </div>
        );
      })}

      <hr />
    </>
  );
}

export default App;
