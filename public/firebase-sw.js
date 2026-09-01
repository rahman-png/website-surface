// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
// eslint-disable-next-line no-undef
firebase.initializeApp({
  apiKey: "AIzaSyCeWUoatfVaPC984kvUpEmFjZQDVz4uToA",
  authDomain: "surface-skin-habit.firebaseapp.com",
  projectId: "surface-skin-habit",
  storageBucket: "surface-skin-habit.appspot.com",
  messagingSenderId: "910146006379",
  appId: "1:910146006379:web:71d0fde8088fff3a90302e",
  measurementId: "G-2S2307GVJD"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "./img/logo.svg"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
