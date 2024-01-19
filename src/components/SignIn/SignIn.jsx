import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import { useRef } from "react";
import { Navigate } from "react-router-dom";

const SignIn = () => {
  const auth = getAuth(app);
  const emailref = useRef();

  //Form Submit......!
  const handleFormSubmit = (event) => {
    event.preventDefault();

    //get value for form..!
    const email = event.target.email.value;
    const password = event.target.password.value;

    //login in user...!
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        event.target.reset();
        alert("done");
        <Navigate to="/dashboard" replace={true}></Navigate>;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //Forget password....!
  const ForgetPass = () => {
    const email = emailref.current.value;

    //validation...!
    if (!email) {
      alert("Please Provide your email address");
    }

    //send reset email..!
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("check your email..!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="container mx-auto mt-28">
      <div className="card mx-auto w-96 bg-base-100 shadow-xl mt-3">
        <div className="card-body">
          <h2 className="card-title mx-auto">Sign In!</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="p-5">
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                required
                ref={emailref}
                className="input input-bordered input-accent w-full max-w-xs"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                required
                className="input input-bordered input-accent w-full max-w-xs mt-3"
              />
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
          <p>
            <small>
              Forget Password? Please{" "}
              <button className="ml-0 btn btn-link" onClick={ForgetPass}>
                Reset
              </button>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
