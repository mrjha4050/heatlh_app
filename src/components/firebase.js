import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCtFIqGYHVz_K3PqEtZqUsIrYVbicXIsTA",
    authDomain: "testing-160e7.firebaseapp.com",
    projectId: "testing-160e7",
    storageBucket: "testing-160e7.appspot.com",
    messagingSenderId: "824763426029",
    appId: "1:824763426029:web:cae8845956e1ff4122d8e4",
    measurementId: "G-HE1PGSVCSE"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

// Example user registration with static email and password
const email = 'example@example.com';
const password = 'password123';
const confirmPassword = 'password123';

createUserWithEmailAndPassword(auth, email, password, confirmPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log('User registered successfully:', user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error registering user:', errorCode, errorMessage);
  });

export { auth, firebaseApp };
