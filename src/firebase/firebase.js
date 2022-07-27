import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: 'AIzaSyCf3crIy12UTCywk1D7NOisc-tzeMF_fd8',
    authDomain: 'ab-app-24cfc.firebaseapp.com',
    projectId: 'ab-app-24cfc',
    storageBucket: 'ab-app-24cfc.appspot.com',
    messagingSenderId: '715656021627',
    appId: '1:715656021627:web:b0ab88d29a7a7e323d04de',
    measurementId: 'G-NN9C4HRNFG',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

//----- Creates User with Email and password

export const createUserAuthWithEmailAndPassword = async(
    email,
    password
) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
};

///== Storing the authenticated user inside of FireStore

const db = getFirestore();

export const createUserAuthDb = async(
    userAuth,
    additionalInformation
) => {
    if (!userAuth) return;
    const UserGetDocRef = doc(db, 'users', userAuth.uid);

    const UserGetDocRefSnapshot = await getDoc(UserGetDocRef);

    //=====we want to check to see if the document we're trying to set already exists
    if (!UserGetDocRefSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(UserGetDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            alert(
                `There was an error creating this user with error : ${error.message}`
            );
        }
        return UserGetDocRef;
    }
};

//----- Signing In with Email and Password

export const SignInAuthUserWithEmailAndPassword = async(
    email,
    password
) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
};