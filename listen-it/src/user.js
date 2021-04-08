import firebase, { auth as a } from './firebase/config';

const db = firebase;

export default db;

export const auth = a;