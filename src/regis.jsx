import React, {useState} from 'react';
import {createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import {auth, db} from './index.js';
import {setDoc, doc} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

function Register (){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmP, setConfirmP] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          const user = auth.currentUser;
          console.log(user);
          if (user) {
            await setDoc(doc(db, "Users", user.uid), {
              email: user.email,
            });
          }

          if (password == confirmP){
            console.log("Correct Password");
          } else {
            console.log("Incorrect Password");
          }

          sendEmailVerification(auth.currentUser)
          .then(()=>{
            console.log("Email Verification Sent!");
        });

          console.log("User Registered Successfully!!");
        } catch (error) {
          console.log(error.message);
        }
      };
      
    return(
            <form onSubmit={handleRegister}>
                <h3>Try Register</h3>
                <label htmlFor="email">Email: </label>
                <input type="email" id = "email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} /> <br/>
                <label htmlFor="password">Password: </label>
                <input type="password" id = "password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} /> <br/>
                <label htmlFor="password">Password: </label>
                <input type="password" id = "password" placeholder='Password' onChange={(e) => setConfirmP(e.target.value)} /> <br/>
                <input type="submit" value={"Submit"} />
            </form>
    );
}

export default Register