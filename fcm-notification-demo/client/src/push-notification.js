import firebase from 'firebase'

export const initializeFirebase = () => {
	firebase.initializeApp({
		apiKey: "AIzaSyAEe_ebLR4hBLSi0tLB78J4Z_IWGjUNz38",
		authDomain: "push-notification-demo-3535a.firebaseapp.com",
		databaseURL: "https://push-notification-demo-3535a.firebaseio.com",
		projectId: "push-notification-demo-3535a",
		storageBucket: "push-notification-demo-3535a.appspot.com",
		messagingSenderId: "754393561639",
		appId: "1:754393561639:web:7595a6935a81d78c50ec02"
	});
	navigator.serviceWorker
		.register('firebase-messaging-sw.js')
		.then((registration) => {
			firebase.messaging().useServiceWorker(registration);
		});
}

export const askForPermissioToReceiveNotifications = async () => {
	try {
		const messaging = firebase.messaging();
		await messaging.requestPermission();
		const token = await messaging.getToken();
		console.log('token do usuário:', token);

		return token;
	} catch (error) {
		console.error(error);
	}
}
