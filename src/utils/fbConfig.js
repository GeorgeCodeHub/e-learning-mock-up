import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
	apiKey: "YOUR-API-KEY",
	authDomain: "YOUR-AUTHOR-DOMAIN",
	databaseURL: "YOUR-DATABASE-URL",
	projectId: "YOUR-PROJECT-ID",
	storageBucket: "YOUR-STORAGE-BUCKET",
	messagingSenderId: "YOUR-MESSAGING-SENDER-ID",
	appId: "YOUR-APPID",
	measurementId: "YOUR-MEASUREMENT-ID"
});

export const firestore = firebase.firestore();

export default firebaseConfig;
