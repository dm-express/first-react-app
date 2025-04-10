import { useEffect, useLayoutEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HelloWorld from "./HelloWorld";
import UserDetailsComponent, { IsUserOnline } from "./components/userDetails";

// JSX / TSX -> Typyscript XML
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  // hooks: functions that are responsible for re-rendering.

  // useState: -> to store the local data
  // useEffect: -> to handle the initial functions & the side effects
  // [] -> dependency array / dependencies

  // useEffect get triggered after the component is rendered
  useEffect(() => {
    console.log("Initial Value");
  }, []);

  useEffect(() => {
    console.log("Initial Value", count);
  }, [count]);

  // useLayoutEffect get triggered before the component is rendered
  // useLayoutEffect(() => {
  //   console.log("Initial Value");
  // }, []);

  // let newCount = 0;

  // variable type [getterName, setterName] = useState(initialValue)

  // setCount((count) => count + 1);

  // setter((previousValue) => newValue)

  const addNumbers = () => {
    alert(2 + 3);
  };

  // State: dynamic data that changes inside the component

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

  // console.log("newCount", newCount);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        {/* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>DM Express</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          countsss is {count}
        </button>
        {/* <button
          onClick={() => {
            newCount += 1;
          }}
        >
          new count is {newCount}
        </button> */}
        <button onClick={addNumbers}>Alert</button>
        <p>
          Edit <code>src/App.tsx</code> and save to see the real time changes.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* <HelloWorld /> */}

      {userDetailsList.map((ele) => {
        // u can add some logic over here
        const empId = `${ele.name}-${ele.department}`;
        // console.log("empId", empId);
        return (
          <>
            <UserDetailsComponent department={ele.department} name={ele.name} />
            <IsUserOnline isOnline={ele.isOnline} />
          </>
        );
      })}

      <hr />

      {/* {userDetailsList.map((ele) => (
        <IsUserOnline isOnline={ele.isOnline} />
      ))} */}

      {/* <UserDetailsComponent
        department={userDetailsList[0].department}
        name={userDetailsList[0].name}
      /> */}
    </>
  );
}

// App is the parent
// UserDetailsComponent is a child
// IsUserOnline is a child

export default App;
