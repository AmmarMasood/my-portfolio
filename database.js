const api = "./keys";
// Initialize Firebase
var config = {
  apiKey: api,
  authDomain: "my-website-4915f.firebaseapp.com",
  databaseURL: "https://my-website-4915f.firebaseio.com",
  projectId: "my-website-4915f",
  storageBucket: "my-website-4915f.appspot.com",
  messagingSenderId: "530688618080"
};
firebase.initializeApp(config);

// create a reference to messages collection
const messagesRef = firebase.database().ref("messages");

// forms working
// listen via id
document.getElementById("contact-form").addEventListener("submit", submitForm);

// submits the for,
function submitForm(e) {
  e.preventDefault();
  const name = getValues("name");
  const email = getValues("email");
  const subject = getValues("subject");
  console.log(name);
  console.log(email);
  console.log(subject);
  // saves the message in firebase
  saveMessage(name, email, subject);
  // show alert that message has been sent
  document.querySelector(".notify").style.opacity = "1";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  // // hides alrt after 2 secs
  setTimeout(function() {
    document.querySelector(".notify").style.opacity = "0";
  }, 5000);
}

// function to get form values
function getValues(id) {
  return document.getElementById(id).value;
}

//saves message to firebase
function saveMessage(name, email, subject) {
  const newMessage = messagesRef.push();
  newMessage.set({
    name: name,
    email: email,
    message: subject,
    date: new Date().toDateString(),
    time: new Date().toTimeString()
  });
}
