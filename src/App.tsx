import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import UserDetailsComponent, { IsUserOnline } from "./components/userDetails";
import { useAuth } from "./wrapper/authWrapper";
import { Button } from "@mui/material";

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
  const { isUserLoggedIn } = useAuth();
  // Local state variables
  const [count, setCount] = useState(0);
  const [name, setName] = useState(""); // currently unused, but useful for user input later
  const [array, setArray] = useState<Array<number>>([]);

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

  // if (isUserLoggedIn) {
  //   console.log("true");
  // } else {
  //   console.log("false");
  // }

  const showSettingsButtonFn = () => {
    if (isUserLoggedIn) {
      return true;
    } else {
      return false;
    }
  };

  const showSettingButton = isUserLoggedIn ? true : false;

  const listOfUsers = ["74512"];

  const updateArr = (number: number) => {
    setArray(array.concat(number));
  };

  return (
    <>
      {/* Logo Section */}
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>DM Express</h1>
      {array}
      <Button onClick={() => updateArr(5)}>Update Array</Button>
      {/* Counter Section */}
      <div className="card">
        {/* <button onClick={() => setCount((prev) => prev + 1)}>
          count is {count}
        </button> */}
        {/* {ternery operator} */}
        {/* condition is true do this or do that if this is true do this else do
        that */}
        Function: {String(showSettingsButtonFn())}
        <br />
        Variable: {String(showSettingButton)}
        <br />
        {/* Conditional Rendering */}
        {showSettingButton ? <Button>Settings</Button> : <Button>Login</Button>}
        {showSettingButton && <Button>Settings &&</Button>}
        {listOfUsers.length > 0 && <p>Hello Users</p>}
        <Button variant="contained" disabled>
          {String(isUserLoggedIn)}
        </Button>
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
      App
      <hr />
      Form
    </>
  );
}

export default App;
