import * as firebase from 'firebase'
import { FirebaseDatabaseProvider } from "@react-firebase/database";

function sendContactForm(){
  firebase.database().ref("/submissions").push().set(myObject);
}
