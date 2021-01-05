importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

var firebaseConfig = {
	apiKey: "AIzaSyAEe_ebLR4hBLSi0tLB78J4Z_IWGjUNz38",
	authDomain: "push-notification-demo-3535a.firebaseapp.com",
	databaseURL: "https://push-notification-demo-3535a.firebaseio.com",
	projectId: "push-notification-demo-3535a",
	storageBucket: "push-notification-demo-3535a.appspot.com",
	messagingSenderId: "754393561639",
	appId: "1:754393561639:web:7595a6935a81d78c50ec02"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();