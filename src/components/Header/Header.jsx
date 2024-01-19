import { Link } from "react-router-dom";
import './Header.css'
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";

const Header = () => {
  const auth = getAuth(app);

  //user Sign Out..!
  const handleLogout = () => {
    signOut(auth).then(() => {
      alert('user logout')
    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    <div className="container mx-auto mt-10 px-10">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Admin Dashboard</a>
        </div>
        <div className="navabr">
          <Link to="dashboard" className="mr-2">Dashboard</Link>
          <Link to="/" className="mr-2">Sign In</Link>
          <Link to="signup" className="mr-2">Sign Out</Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
