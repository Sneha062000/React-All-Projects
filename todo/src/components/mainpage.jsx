import React from "react"
import { Link } from "react-router-dom";
const mainpage=()=>{
    return (
      <>
        <header>
          <h1 className="heading">login / Signin</h1>
          <div className="buttons">
            <Link to="./Login">
              <button className="pri-button">login</button>
            </Link>
            <Link to="./Signin">
              <button className="pri-button">Signin</button>
            </Link>
          </div>
        </header>
      </>
    );
}
export default mainpage