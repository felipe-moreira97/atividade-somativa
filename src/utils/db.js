import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6ufgA-bv8M8Zv50WUEKW0n_nuqpcQYL8",
    authDomain: "avaliacao-somativa-2.firebaseapp.com",
    projectId: "avaliacao-somativa-2",
    storageBucket: "avaliacao-somativa-2.firebasestorage.app",
    messagingSenderId: "73352263143",
    appId: "1:73352263143:web:caea73f8c162390afa3942"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)


const createCredential = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const createUser = async ({ name, lastName, email, birthDate, password }) => {
    const id = (await createCredential(email, password)).user.uid
    await setDoc(doc(db, "users", id), {
        name,
        lastName,
        email,
        birthDate,
    });
}

const getUserByUid = async (uid) => {
    const resp = await getDoc(doc(db, "users", uid))
    if (resp.exists()) {
        return resp.data()
    }
    return undefined
}

export const signIn = async (email, password) => {
    const credentials = await signInWithEmailAndPassword(auth, email, password)
    const id = credentials.user.uid;
    const user = await getUserByUid(id);
    if (!user) throw new Error()
    return user
}