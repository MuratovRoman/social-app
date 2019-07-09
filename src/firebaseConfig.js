import firebase from 'firebase'
import 'firebase/firestore'

//firebase init
const config = {
    apiKey: "AIzaSyA_kLbBs7IpYbKWMupNvQVae55VPRxjI0Q",
    authDomain: "social-app-3c849.firebaseapp.com",
    databaseUrl: "https://social-app-3c849.firebaseio.com",
    projectId: "social-app-3c849",
    storageBucket: "",
    messagingSenderId: "99836641295",
    appId: "1:99836641295:web:81f6c6e307aacc9a"
}

firebase.initializeApp(config)

//firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

//date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

//firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}