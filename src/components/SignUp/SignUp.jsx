import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";

const SignUp = () => {
  const auth = getAuth(app);
  const [error, setError] = useState('')

  //form submit.....!
  const handleFormSubmit = (event) => {
    event.preventDefault();
    
     //get value for form..!
     const displayName = event.target.displayName.value;
     const email = event.target.email.value;
     const password = event.target.password.value;

     //create a new user form firebase..!
     createUserWithEmailAndPassword(auth, email, password)
     .then((result) => {
      console.log(result.user);

      //Send Email Verification...!
      sendVerificationEmail(result.user);
      updateUserData(result.user, displayName);

      //Clear form Data...!
      setError('');
      event.target.reset();

      //Redirect to Sign In Page...!
      
     }).catch((error) => {
      console.error(error.massage);
      setError(error.massage);
     });
  }

  //Email Verification....!
  const sendVerificationEmail = (user) => {
    sendEmailVerification(user)
    .then(result => {
      console.log(result);
    }).catch(error => {
      console.log(error);
    })
  }

  //Update user name...!
  const updateUserData = (user, name) => {
    updateProfile(user, {
      displayName: name
    }).then(() => {
      console.log('user name updated');
    }).catch((error) => {
      console.log(error.massage);
    })
  }

  return (
    <div className="container mx-auto">
      <div className="card mx-auto w-96 bg-base-100 shadow-xl mt-28">
        <div className="card-body">
          <h2 className="card-title mx-auto">Sign Up!</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="p-5">
              <input
                type="text"
                placeholder="Name"
                name="displayName"
                required
                className="input input-bordered input-accent w-full max-w-xs mt-3"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                className="input input-bordered input-accent w-full max-w-xs mt-3"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                className="input input-bordered input-accent w-full max-w-xs mt-3"
              />
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <p>{error}</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
