// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'

import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyCYEyRF-F_asVJGWKMg18krARm-hIn5Ypw',

  authDomain: 'netflix-6e3a0.firebaseapp.com',

  projectId: 'netflix-6e3a0',

  storageBucket: 'netflix-6e3a0.appspot.com',

  messagingSenderId: '442242435646',

  appId: '1:442242435646:web:99015613e9e658f716df6f',

  measurementId: 'G-R8NRFNMRXS',
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)

export const firebaseAuth = getAuth(app)
