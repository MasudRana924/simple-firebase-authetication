
import './App.css';
import { getAuth, signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from './Firebase/FirebaseInitialize'
import { useState } from 'react';
initializeAuthentication()

const googleProvider=new GoogleAuthProvider();
const auth = getAuth();
function App() {
  const [user,setUser]=useState({})
  const handleGoogleSignin=()=>{

    signInWithPopup(auth, googleProvider)
    .then(result=>{
      const{displayName,email}=result.user
      const loggedIn={
        name:displayName ,
        email:email 
      }
      setUser(loggedIn)
    })
  
  }

  

  return (
    <div className="App">
      <button onClick={handleGoogleSignin} className="btn btn-primary">Google Signin</button>
      {
        user.name && <div>
          <h2>Welcome : {user.name}</h2>
          <p>Email : {user.email}</p>
        </div>
      }
     
    </div>
  );
}

export default App;
