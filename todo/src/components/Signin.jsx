import React from "react"
const Signin=()=>{
    return (
      <>
        <div className="container">
          <h2>Signin</h2>
          <h4>Create your account</h4>
          <form>
            <p>
              <label>Username</label>
              <br />
              <input
                type="text"
                placeholder="username"
                name="first_name"
                required
              />
            </p>
            <p>
              <label>Email address</label>
              <br />
              <input type="email" placeholder="emai" name="email" required />
            </p>
            <p>
              <label>Password</label>
              <br />
              <input type="password" placeholder="password" name="password" required />
            </p>
            <p>
              <button id="sub_btn" type="submit">
                Signin
              </button>
            </p>
          </form>
        </div>
      </>
    );
}
export default Signin