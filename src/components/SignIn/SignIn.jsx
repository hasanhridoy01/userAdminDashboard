import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.init";

const SignIn = () => {
    const auth = getAuth(app);

    //Form Submit......!
    const handleFormSubmit = (event) => {
        event.preventDefault();

        //get value for form..!
        const email = event.target.email.value;
        const password = event.target.password.value;

        //login in user...!
        signInWithEmailAndPassword(auth, email, password).then((user) => {
            console.log(user);
            event.target.reset();
            alert('done');
        }).catch((error) => {
            console.log(error.message);
        })
    }

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
        </div>
      </div>
    </div>
  );
};

export default SignIn;
