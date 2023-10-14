/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyDu3yiBsOFd3kbFKuaX-ft-0jGu7xTPxqs",
  authDomain: "friendly-chat-dff36.firebaseapp.com",
  projectId: "friendly-chat-dff36",
  storageBucket: "friendly-chat-dff36.appspot.com",
  messagingSenderId: "827570334186",
  appId: "1:827570334186:web:f8f06e3acb6d29840a6a93"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}