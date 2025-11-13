import { useRef } from "react";
import "./Login.css";
import { verifyUser } from "../../data/users";

function Login({ setToken, setRole }) {
  const userRef = useRef();
  const passRef = useRef();

  const handleLogin = () => {
    const user = userRef.current.value.trim();
    const pass = passRef.current.value.trim();
    const UserInfo = verifyUser(user, pass);

    // ล้างค่า input
    userRef.current.value = "";
    passRef.current.value = "";
    userRef.current.focus();

    if (!UserInfo) {
      alert("Wrong username or password");
    } else {
      setToken(UserInfo.token);
      setRole(UserInfo.role);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container" >
        <h2 className="login-title">Welcome to my website 💜</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <input
            type="text"
            placeholder="user"
            ref={userRef}
            className="form-control login-input"
            style={{ textAlign: "center" }}
          />
          <input
            type="password"
            placeholder="pass"
            ref={passRef}
            className="form-control login-input"
            style={{ textAlign: "center" }}
          />
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
