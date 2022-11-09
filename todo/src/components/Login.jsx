import React from "react"
const Login=()=>{
return (
  <div>
    <h2>Login</h2>
    <form >
      <p>
        <label>Username</label>
        <br />
        <input type="text" name="first_name" required />
      </p>
      <p>
        <label>Password</label>

        <br />
        <input type="password" name="password" required />
      </p>
      <p>
        <button type="submit">
          Login
        </button>
      </p>
    </form>
  </div>
);
}
export default Login