import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth, updateEmail, UserCredential, Auth } from "firebase/auth";
import { auth } from "./firebase-config";
import { get, set, ref, query, equalTo, orderByChild, update, onValue } from "firebase/database";
import { db } from "./firebase-config";

export const registerUser = (email: string, password: string): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const createUserProfile = (
  uid: string,
  username: string,
  email: string,
  password: string,
  phoneNumber: string,
  notifications: any,
  status: string,
  role: string  = "user",
) => {
  const readableDate = new Date().toLocaleString(); 

  return set(ref(db, `users/${uid}`), {
    uid,
    username,
    email,
    password,
    phoneNumber,
    userPhotoURL: "",
    notifications,
    status,
    role,
    createdOnReadable: readableDate,
  });
};
