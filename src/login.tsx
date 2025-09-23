import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/user-slice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [emailId, setEmailId] = useState("tahir@gmail.com");
  const [password, setPassword] = useState("abcd");
  const navigate = useNavigate();
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
    navigate("/");
    console.log(data.data);
  };
  return (
    <div className="flex justify-center my-5">
      <div className="card bg-base-200 w-70 shadow-sm">
        <div className="card-body items-center">
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
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
