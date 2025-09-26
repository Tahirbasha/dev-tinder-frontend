import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/user-slice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setLoginForm] = useState(false);
  const navigate = useNavigate();
  const handleLoginOrSignUp = () => {
    if (isLoginForm) {
      handleLogin();
    } else {
      handleSignUp();
    }
  };
  const handleLogin = async () => {
    const { data } = await axios.post(
      "http://localhost:8080/login",
      {
        emailId,
        password,
      },
      { withCredentials: true }
    );
    dispatch(addUser(data.data));
    navigate("/feed");
  };
  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      if (res.status === 200) {
        dispatch(addUser(res.data.data));
        navigate("/feed");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center my-5 h-screen items-center">
      <div className="card bg-base-200 w-70 shadow-sm">
        <div className="text-center mt-3">
          {isLoginForm ? "Login" : "SignUp"}
        </div>
        <div className="card-body items-center">
          {!isLoginForm && (
            <>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Email Id</legend>
                <input
                  type="text"
                  className="input"
                  placeholder="Type here"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Password</legend>
                <input
                  type="text"
                  className="input"
                  placeholder="Type here"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </fieldset>
            </>
          )}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email Id</legend>
            <input
              type="text"
              className="input"
              placeholder="Type here"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="text"
              className="input"
              placeholder="Type here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={handleLoginOrSignUp}>
              {isLoginForm ? "Login" : "SignUp"}
            </button>
          </div>
          <p
            className="cursor-pointer my-2"
            onClick={() => setLoginForm((value) => !value)}
          >
            New User? Sign Up or Login
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
