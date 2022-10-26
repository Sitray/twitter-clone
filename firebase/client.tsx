// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  collection,
  addDoc,
  getFirestore,
  Timestamp,
} from 'firebase/firestore';
import IGithub, { IAddTwit, IUser } from '../interfaces/IGithub';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC_VLPjuYEIuoY-6dGQFKTHw7YKMS-BiuU',
  authDomain: 'twitter-clone-60254.firebaseapp.com',
  projectId: 'twitter-clone-60254',
  storageBucket: 'twitter-clone-60254.appspot.com',
  messagingSenderId: '765444552557',
  appId: '1:765444552557:web:b16129cb9e0c4872958c64',
  measurementId: 'G-FX8ZZY482R',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
const userLoged = auth.currentUser;

const mapUserFromFirebase = (user: any) => {
  if (user) {
    const { displayName, email, photoURL, phoneNumber, uid } = user;
    const { screenName } = user.reloadUserInfo;

    return {
      avatar: photoURL,
      displayName,
      email,
      phoneNumber,
      userName: screenName,
      uid,
    };
  }
};

export const onAuthState = (onChange: any) => {
  return onAuthStateChanged(auth, (user) => {
    const refactoredUser = user ? mapUserFromFirebase(user) : null;
    onChange(refactoredUser);
  });
};

export const loginWithGithub = () => {
  const githubProvider = new GithubAuthProvider();
  return signInWithPopup(auth, githubProvider).then(mapUserFromFirebase);
};

export const addTwit = ({ avatar, content, userId, userName }: any) => {
  const addDocument = addDoc(collection(db, 'Tuits'), {
    avatar,
    content,
    userId,
    userName,
    createdAt: Timestamp.fromDate(new Date()),
    likesCount: 0,
    retuitsCount: 0,
  });

  return addDocument;
};
