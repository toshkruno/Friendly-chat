if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
var firebaseConfig = {
  "projectId": "friendly-chat-dff36",
  "appId": "1:827570334186:web:f8f06e3acb6d29840a6a93",
  "storageBucket": "friendly-chat-dff36.appspot.com",
  "locationId": "us-central",
  "apiKey": "AIzaSyDu3yiBsOFd3kbFKuaX-ft-0jGu7xTPxqs",
  "authDomain": "friendly-chat-dff36.firebaseapp.com",
  "messagingSenderId": "827570334186"
};
if (firebaseConfig) {
  firebase.initializeApp(firebaseConfig);

  var firebaseEmulators = undefined;
  if (firebaseEmulators) {
    console.log("Automatically connecting Firebase SDKs to running emulators:");
    Object.keys(firebaseEmulators).forEach(function (key) {
      console.log('\t' + key + ': http://' + firebaseEmulators[key].hostAndPort);
    });

    if (firebaseEmulators.database && typeof firebase.database === 'function') {
      firebase.database().useEmulator(firebaseEmulators.database.host, firebaseEmulators.database.port);
    }

    if (firebaseEmulators.firestore && typeof firebase.firestore === 'function') {
      firebase.firestore().useEmulator(firebaseEmulators.firestore.host, firebaseEmulators.firestore.port);
    }

    if (firebaseEmulators.functions && typeof firebase.functions === 'function') {
      firebase.functions().useEmulator(firebaseEmulators.functions.host, firebaseEmulators.functions.port);
    }

    if (firebaseEmulators.auth && typeof firebase.auth === 'function') {
      // TODO: Consider using location.protocol + '//' instead (may help HTTPS).
      firebase.auth().useEmulator('http://' + firebaseEmulators.auth.hostAndPort);
    }

    if (firebaseEmulators.storage && typeof firebase.storage === 'function') {
      firebase.storage().useEmulator(firebaseEmulators.storage.host, firebaseEmulators.storage.port);
    }
  } else {
    console.log("To automatically connect the Firebase SDKs to running emulators, replace '/__/firebase/init.js' with '/__/firebase/init.js?useEmulator=true' in your index.html");
  }
}
