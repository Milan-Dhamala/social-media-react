import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router-use-history";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();
  // const BL = process.env.REACT_APP_BASE_LOC;


  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        console.log(user)
        await axios.post("http://localhost:8800/api/auth/register", user);
        console.log("hello worls")

        history.push("/login");
      } catch (error) {
        if (error.response) { 
          // If server responded with a status code for a request 
          console.log("Data ", error.response.data); 
          console.log("Status ", error.response.status); 
          console.log("Headers ", error.response.headers); 
      } else if (error.request) { 
          // Client made a request but response is not received 
          console.log("called", error.request); 
      } else { 
          // Other case 
          console.log("Error", error.message); 
      } 
      // Error handling here 
      return res.status(401).send(error.message); 
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
