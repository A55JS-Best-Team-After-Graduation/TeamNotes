import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth, updateEmail, UserCredential, Auth } from "firebase/auth";
import { auth } from "../config/firebase-config";
import { get, set, ref, query, equalTo, orderByChild, update, onValue } from "firebase/database";
import { db } from "../config/firebase-config";

export const registerUser = (email: string, password: string): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginUser = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = () => {
  return signOut(auth);
};

export const createUserProfile = (
  uid: string,
  username: string,
  email: string,
  password: string,
) => {
  const readableDate = new Date().toLocaleString(); 

  return set(ref(db, `users/${uid}`), {
    uid,
    username,
    email,
    password,
    createdOnReadable: readableDate,
  });
};

export const getUserByEmail = async (email: string) => {
  try {
    const usersRef = query(
      ref(db, "users"),
      orderByChild("email"),
      equalTo(email)
    );
    const snapshot = await get(usersRef);
    if (!snapshot.exists()) {
      throw new Error(`User with email ${email} does not exist.`);
    }
    console.log('Snapshot Val:', snapshot.val()); // Log the snapshot value
    // Assuming the data structure is { userId: { ...userData } }
    const userData = snapshot.val();
    const userId = Object.keys(userData)[0]; // Get the first key (assuming unique email)
    return userData[userId];
  } catch (error) {
    console.error('Error fetching user by email:', error);
    throw error;
  }
};


export const getUserByUid = async (uid: string) => {
  try {
    const userRef = ref(db, `users/${uid}`);
    const snapshot = await get(userRef);
    
    if (!snapshot.exists()) {
      throw new Error(`User with UID ${uid} does not exist.`);
    }
    
    const userData = snapshot.val();
    return userData;
  } catch (error) {
    console.error('Error fetching user by UID:', error);
    throw error;
  }
};
