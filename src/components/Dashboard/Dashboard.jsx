import "./Dashboard.css";
import Header from "../Header/Header";

const Dashboard = () => {
  return (
    <div className="px-10">
      <Header></Header>
      <div className="grid grid-cols-4 gap-4 mt-10">
        <div className="mt-10">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3>m enorfdjklfns vxp</h3>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="card p-10 mt-10 shadow-lg">
            <button
              className="btn btn-outline btn-success add-user"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Add New User
            </button>
            <div className="card-body">
              <div className="overflow-x-auto">
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>About</th>
                      <th>Photo</th>
                      <th>Address</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Blue@gmail.com</td>
                      <td>Quality Control Specialist</td>
                      <td>
                        <img src="../../../public/vite.svg" alt="" />
                      </td>
                      <td>Mirpur-11</td>
                      <td>
                        <button
                          className="btn btn-info btn-sm mr-2"
                          onClick={() =>
                            document.getElementById("my_modal_2").showModal()
                          }
                        >
                          View
                        </button>
                        <button
                          className="btn btn-warning btn-sm mr-2"
                          onClick={() =>
                            document.getElementById("my_modal_3").showModal()
                          }
                        >
                          Edit
                        </button>
                        <button className="btn btn-error btn-sm">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="card p-10 mt-20 shadow-lg">
        <button
          className="btn btn-outline btn-success add-user"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Add New User
        </button>
        <div className="card-body">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>About</th>
                  <th>Photo</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Blue@gmail.com</td>
                  <td>Quality Control Specialist</td>
                  <td>
                    <img src="../../../public/vite.svg" alt="" />
                  </td>
                  <td>Mirpur-11</td>
                  <td>
                     <button className="btn btn-info btn-sm mr-2" onClick={() => document.getElementById("my_modal_2").showModal()}>View</button>
                     <button className="btn btn-warning btn-sm mr-2" onClick={() => document.getElementById("my_modal_3").showModal()}>Edit</button>
                     <button className="btn btn-error btn-sm">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div> */}

      {/* add new user modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h2 className="user">Add New User</h2>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is your name?</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is your email?</span>
            </div>
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <div className="label">
            <span className="label-text">About your self!</span>
          </div>
          <textarea
            placeholder="Bio"
            className="textarea textarea-bordered textarea-md w-full max-w-xs"
          ></textarea>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is your Address?</span>
            </div>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <button className="btn btn-outline btn-success mt-3">Primary</button>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* View user modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h2 className="user">Show User</h2>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">your name?</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">your email?</span>
            </div>
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <div className="label">
            <span className="label-text">About your self!</span>
          </div>
          <textarea
            placeholder="Bio"
            className="textarea textarea-bordered textarea-md w-full max-w-xs"
          ></textarea>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">your Address?</span>
            </div>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* Edit user modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h2 className="user">Update User</h2>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is your name?</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is your email?</span>
            </div>
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <div className="label">
            <span className="label-text">About your self!</span>
          </div>
          <textarea
            placeholder="Bio"
            className="textarea textarea-bordered textarea-md w-full max-w-xs"
          ></textarea>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is your Address?</span>
            </div>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <button className="btn btn-outline btn-warning mt-3">Update</button>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Dashboard;
