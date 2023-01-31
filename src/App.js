import "./App.css";
import { useRef } from "react";

function App() {
  let email = useRef();
  let password = useRef();

  const handleSubmit = () => {
    let userEmail = email.current.value;
    let userPassword = password.current.value;
    if ((userEmail == "") || (userPassword == "")) {
      alert("Enter the details to proceed");
    } else {
      alert("Login SuccessFully")
      email.current.value=""
      password.current.value=""
    }
  };

  return (
    <>

      <div className="main">
        <p>Login Form Using UseRefs() </p>
        <input type="text" ref={email} placeholder="Enter Email id" />
        <input type="text" ref={password} placeholder="Enter Password" />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default App;
