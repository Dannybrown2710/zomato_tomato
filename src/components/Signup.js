import { useState } from "react";
import "./Login.css";
function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  const submitLogin = (e) => {
    e.preventDefault();
    console.log(username,password)
  }
  return (
    <>
      <form className="form">
        <label>Login Form</label> <br />
        <input
          type="text"
          placeholder="Enter your email"
          onChange={(e)=>setUsername(e.target.value)}
          value={username}
        />{" "}
        <br />
        <input type="password" 
        placeholder="Enter your password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={submitLogin}>Login</button>
      </form>
    </>
  );
}

export default Login;
