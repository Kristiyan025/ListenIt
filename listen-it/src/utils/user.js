import firebase, { auth as a, projectFirestore } from '../firebase/config';

const db = firebase;

export default db;

export const auth = a;
export const dbStore = projectFirestore;