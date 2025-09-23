import type { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "./utils/store";

const Navbar: FunctionComponent<NavbarProps> = () => {
  const User = useSelector((state: RootState) => state.User) as {
    firstName: string;
  } | null;
  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
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
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
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
