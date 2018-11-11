import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBZ3bWzMfJsqfKSZCCOvUb8ZHVwzD8H0lk",
    authDomain: "react-marioplan.firebaseapp.com",
    databaseURL: "https://react-marioplan.firebaseio.com",
    projectId: "react-marioplan",
    storageBucket: "react-marioplan.appspot.com",
    messagingSenderId: "262790032171"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
