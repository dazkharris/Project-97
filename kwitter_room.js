const firebaseConfig = {
    apiKey: "AIzaSyB18w0s3CU-r1n5gXnoXZEsMZJvLfUFvvw",
    authDomain: "kwitter-3337f.firebaseapp.com",
    databaseURL: "https://kwitter-3337f-default-rtdb.firebaseio.com",
    projectId: "kwitter-3337f",
    storageBucket: "kwitter-3337f.appspot.com",
    messagingSenderId: "1049664871097",
    appId: "1:1049664871097:web:28f0053547bbc465a71968",
    measurementId: "G-6MHMGN70V1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}



function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room Name-" + Room_names);
            row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}