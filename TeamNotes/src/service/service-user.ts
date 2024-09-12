import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth, updateEmail, UserCredential, Auth } from "firebase/auth";
import { auth } from "./firebase-config";
import { get, set, ref, query, equalTo, orderByChild, update, onValue } from "firebase/database";
import { db } from "./firebase-config";

export const registerUser = (email: string, password: string): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password);
};

