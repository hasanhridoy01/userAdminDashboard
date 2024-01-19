const SignIn = () => {
  return (
    <div className="container mx-auto mt-28">
      <div className="card mx-auto w-96 bg-base-100 shadow-xl mt-3">
        <div className="card-body">
          <h2 className="card-title mx-auto">Sign In!</h2>
          <div className="p-5">
          <input type="text" placeholder="Email" className="input input-bordered input-accent w-full max-w-xs" />
          <input type="text" placeholder="Password" className="input input-bordered input-accent w-full max-w-xs mt-3" />
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
