import "./Dashboard.css";
import Header from "../Header/Header";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app, { database } from "../firebase/firebase.init";
import { get, ref } from 'firebase/database';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [getUser, setGetUser] = useState([]);

  if (user) {
    console.log(user.email);
  }

  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Add New User form Database...!
  const handleFormSubmit = async(event) => {
    event.preventDefault();
    
    //get all value for from field....!
    const name = event.target.name.value;
    const email = event.target.email.value;
    const about = event.target.about.value;
    const address = event.target.address.value;

    //set Data...!
    const userSendData = {name, email, about, address}

    if(userSendData){
      console.log(userSendData);
    }

    //send all data form Database.....!
    fetch('https://useradminapps-default-rtdb.firebaseio.com/userData.json',{
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userSendData)
    }).then((res) => {
      console.log(res);
      alert('Data Store Done..!')
      event.target.reset();
      getDataFirebase();
      document.getElementById("my_modal_1").hideModal();
    }).catch((error) => {
      console.log(error);
    })
  };

  //get all user form firebase Database...!
  const getDataFirebase =  useEffect(() => {
    const userRef = ref(database, 'userData');
    get(userRef).then((snapshot) => {
      if(snapshot.exists()){
        const userArray = Object.entries(snapshot.val()).map(([id, data]) => ({
          id, 
          ...data,
        }))
        setGetUser(userArray);
      }else{
        console.log("No Data available..!");
      }
    }).catch((error) => {
      console.log(error);
    })
  },[]);

  return (
    <div className="px-10">
      <Header></Header>
      <div className="grid grid-cols-4 gap-4 mt-10">
        <div className="mt-10">
          <div className="card shadow-lg">
            <div className="card-body">
              {user ? (
                <>
                  <span className="mx-auto">{user.displayName}</span>
                  <span className="mx-auto">{user.email}</span>
                  <button className="btn btn-xs" onClick={handleSignOut}>
                    Sign out
                  </button>
                </>
              ) : (
                <a to="/login">Login </a>
              )}
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
                      <th>Name</th>
                      <th>Email</th>
                      <th>About</th>
                      <th>Photo</th>
                      <th>Address</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      getUser.map((firebaseUSer) => (
                        <tr key={firebaseUSer.id}>
                        <td>{firebaseUSer.name}</td>
                        <td>{firebaseUSer.email}</td>
                        <td>{firebaseUSer.about}</td>
                        <td>
                          <img src="../../../public/vite.svg" alt="" />
                        </td>
                        <td>{firebaseUSer.address}</td>
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
                      ))
                    }

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* add new user modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h2 className="user">Add New User</h2>

          <form onSubmit={handleFormSubmit}>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">What is your name?</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                name="name"
                required
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
                name="email"
                required
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <div className="label">
              <span className="label-text">About your self!</span>
            </div>
            <textarea
              placeholder="Bio"
              name="about"
              required
              className="textarea textarea-bordered textarea-md w-full max-w-xs"
            ></textarea>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">What is your Address?</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                name="address"
                required
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <button className="btn btn-outline btn-success mt-3">
              Primary
            </button>
          </form>

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
