import { useEffect, useState } from "react";
import { Button, TextField, Stack } from "@mui/material";

// interfaces: Structure of the object with types -> strictly checked
// types: Structure of the object with types -> loosely checked

interface TRegistrationForm {
  name: string;
  email: string;
  password: string;
}

// type TRegistrationForm = {
//   name: string;
//   email: string;
//   password: string;
// };

const RegistrationForm = () => {
  //   const [name, setName] = useState<string>("");
  //   const [email, setEmail] = useState<string>("");
  //   const [password, setPassword] = useState<string>("");

  const [registrationForm, setRegistrationForm] = useState<TRegistrationForm>({
    name: "",
    email: "",
    password: "",
  });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (formSubmitted) {
      // if(true) -> go inside the code block alternate to -> if (formSubmitted === true) {
      alert("Thanks for your interest");
      setFormSubmitted(false);
    }
  }, [formSubmitted]); // when ever the formSubmitted state changes it will be triggered

  // Events: onClick, onChange, OnBlur

  const handleNameChange = (event: any) => {
    const userName = event.target.value;
    // setName(userName);
    setRegistrationForm((prev) => ({
      ...prev,
      name: userName,
    }));
  };

  const handleEmailChange = (event: any) => {
    const emailChange = event.target.value;
    // setEmail(emailChange);
    setRegistrationForm((prev) => ({
      ...prev,
      email: emailChange,
    }));
  };

  const handlePasswordChange = (event: any) => {
    const passwordChange = event.target.value;
    // setPassword(passwordChange);
    setRegistrationForm((prev) => ({
      ...prev,
      password: passwordChange,
    }));
  };

  const onFormSubmit = () => {
    // formState.preventDefault();
    console.log("formState", {
      //   name,
      //   email,
      //   password: password,
      registrationForm,
    });
    setFormSubmitted(true);
  };

  // Stack, Box: Layout component of MUI
  return (
    <>
      <Stack gap={2} flexDirection="row" flexWrap={"wrap"}>
        {/* <form action="" style={{ padding: "20px" }}> */}
        {/* <div> */}
        {/* <label htmlFor="name">Name</label>
        <br />
        <input type="text"  /> */}

        <TextField
          required
          id="outlined-required"
          label="Name"
          value={registrationForm.name}
          onChange={handleNameChange}
        />
        {/* </div>
      <div> */}
        {/* <label htmlFor="email">Email</label>
        <br />
        <input type="text" onChange={handleEmailChange} /> */}
        <TextField
          required
          id="outlined-required"
          label="Email"
          value={registrationForm.email}
          onChange={handleEmailChange}
        />
        {/* </div>
      <div> */}
        {/* <label htmlFor="password">Password</label>
        <br />
        <input type="text" onChange={handlePasswordChange} /> */}
        <TextField
          required
          id="outlined-required"
          label="Password"
          value={registrationForm.password}
          onChange={handlePasswordChange}
        />
        {/* </div>
      <br /> */}
        {/* <button >Submit</button> */}
        {/* </form> */}
      </Stack>

      <Button
        variant="contained"
        color="success"
        onClick={onFormSubmit}
        sx={{
          //   marginTop: "10px",
          mt: 2,
        }}
      >
        Submit
      </Button>
    </>
  );
};

export default RegistrationForm;

// Create a HTML layout in a file
// -> Header
// -> Form: Center Aligned with submit button -> onclick of button it will console the form values . Add validations as well (optional)
// -> Multiple components from MUI : footer, cards etc
