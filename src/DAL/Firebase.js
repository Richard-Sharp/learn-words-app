import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyCMpzRb7pkPfmNtukXSdccrWBjlW66ITAQ",
	authDomain: "marathon-test-39719.firebaseapp.com",
	databaseURL: "https://marathon-test-39719-default-rtdb.firebaseio.com",
	projectId: "marathon-test-39719",
	storageBucket: "marathon-test-39719.appspot.com",
	messagingSenderId: "11715353971",
	appId: "1:11715353971:web:808be8fe57f3fba4fe7906"
};


class Firebase {
	constructor() {
		if (!firebase.apps.length) {
			firebase.initializeApp(firebaseConfig);
			}

		this.auth = firebase.auth();
		this.database = firebase.database();
		this.userId = null;
	}
	setUserId = (uId) => this.userId = uId;
	logInUser = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
	getUserCards = () => 	this.database.ref(`/cards/${this.userId}`)
	setNewWordInDataBase = (newWordArr) => this.database.ref(`/cards/${this.userId}`)
}



// export const fire = firebase;
// export const database = firebase.database();

export default Firebase;