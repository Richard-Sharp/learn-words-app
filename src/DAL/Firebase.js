import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyCW483ZYwFAs8U2pOFDAjF6jVRzd5igItA",
	authDomain: "learn-words-app-dbef2.firebaseapp.com",
	databaseURL: "https://learn-words-app-dbef2-default-rtdb.firebaseio.com",
	projectId: "learn-words-app-dbef2",
	storageBucket: "learn-words-app-dbef2.appspot.com",
	messagingSenderId: "933868855165",
	appId: "1:933868855165:web:40f76f52aa89f0fbba7614"
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