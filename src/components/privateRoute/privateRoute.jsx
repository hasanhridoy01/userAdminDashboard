import firebase from '../firebase/firebase.init'

const privateRoute = ({children}) => {

    const users = firebase.auth().listUser();
    const user = users.map((user) => {
        uid: user.uid,
        email: user.email
    })

    return (
        <div>
            
        </div>
    );
};

export default privateRoute;