import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/user-slice";
import { BASE_URL } from "./utils/constants";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "profile", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err: any) {
      if (err.status === 401) {
        navigate("/login");
      }
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default Body;
