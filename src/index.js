
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCgXWkhB2vzWVDH_Ykyyq-TJJGk2tRqNfk",
    authDomain: "another-try-fb.firebaseapp.com",
    projectId: "another-try-fb",
    storageBucket: "another-try-fb.appspot.com",
    messagingSenderId: "49806858272",
    appId: "1:49806858272:web:26c3fc7273778527918445"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth();
  export const db = getFirestore(app);

  export default app;
  