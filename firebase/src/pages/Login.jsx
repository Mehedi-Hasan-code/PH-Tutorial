import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { useState } from "react";
import { GithubAuthProvider } from "firebase/auth";


const Login = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((err) => console.log(err));
  };
  const handleLoginGitHub = () => {
    signInWithPopup(auth, gitHubProvider)
        .then(res => {
            console.log(res);
            console.log(res.user.displayName);
            setUser(res.user.reloadUserInfo
            )
        })
        .catch(err => console.log(err))
  }
  return (
    <div>
      This is Login page
      {user ? (
        <button onClick={handleSignOut}>Sing Out</button>
      ) : (
        <div>
            <button onClick={handleLogin}>Login with google</button>
            <button onClick={handleLoginGitHub}>Login with gitHub</button>
        </div>
      )}
      {user && (
        <div>
          <h2>Name: {user.displayName}</h2>
          <h2>Email: {user.email}</h2>
          <img src={user.photoURL} alt="image" />
        </div>
      )}
    </div>
  );
};

export default Login;
