import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth, updateEmail, UserCredential, Auth } from "firebase/auth";
import { auth } from "./firebase-config";

export const registerUser = (email: string, password: string): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginUser = (email: string, password: string): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = (): Promise<void> => {
  return signOut(auth);
};

export const updateUserEmail = async (newEmail: string): Promise<boolean> => {
  const user = getAuth().currentUser;

  if (!user) {
    console.error("No user is currently signed in.");
    return false;
  }

  try {
    await updateEmail(user, newEmail);
    console.log("Email updated successfully.");
    return true;
  } catch (error) {
    console.error("Error updating email:", error);
    return false;
  }
};
