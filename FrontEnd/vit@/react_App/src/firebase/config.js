// Firebase configuration and uploadFile function
import { initializeApp } from "firebase/app";
import { v4 } from 'uuid';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBsJGdaeMWRVjDp9HrT532_bjQoh7sR4yg",
    authDomain: "react-imagen.firebaseapp.com",
    projectId: "react-imagen",
    storageBucket: "react-imagen.appspot.com",
    messagingSenderId: "426508809869",
    appId: "1:426508809869:web:88411624e294078f1c54c4"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

/**
 * Upload a file to firebase storage
 * @param {*} file the file to upload
 * @return {Promise<String>} URL of the uploaded file
 */


export async function uploadEventFile(file) {
    const storagePath = `Events/${v4()}`;
    const storageRef = ref(storage, storagePath);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
}

export async function uploadPerfilFile(file) {
    const storagePath = `Perfiles/${v4()}`;
    const storageRef = ref(storage, storagePath);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
}