import type { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "./utils/store";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar: FunctionComponent<NavbarProps> = () => {
  const User = useSelector((state: RootState) => state.User);
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await axios.get("http://localhost:8080/logout", {
        withCredentials: true,
      });
      navigate("/login");
    } catch (err) {
    }
  };
  return (
    <div className="navbar bg-base-200 shadow-sm fixed top-0 z-10">
      <div className="flex-1">
        <a onClick={() => navigate("/feed")} className="btn btn-ghost text-xl">
          daisyUI
        </a>
      </div>
      {User && (
        <div className="flex gap-2">
          <div className="dropdown dropdown-end">
            Welcome, {User.firstName}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={
                    User.photoUrl ||
                    "https://brownamdug.wordpress.com/wp-content/uploads/2025/02/wechatimg919-1.png?w=916"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li onClick={() => navigate("/profile")}>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li onClick={logout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

interface NavbarProps {}
export default Navbar;
