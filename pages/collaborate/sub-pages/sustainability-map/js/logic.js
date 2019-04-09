let name;
let email;
let message;
const config = {
    apiKey: "AIzaSyA0HO8LK7fqmGeWlKZjVYjgQn0tSmMlcZI",
    authDomain: "maui-sustainable-solutions.firebaseapp.com",
    databaseURL: "https://maui-sustainable-solutions.firebaseio.com",
    projectId: "maui-sustainable-solutions",
    storageBucket: "maui-sustainable-solutions.appspot.com",
    messagingSenderId: "258456429603"
};
firebase.initializeApp(config);
const database = firebase.database();

$("#submit").on("click", function () {
    name = $("#").val();
    email = $("#").val();
    address = $("#").val();

    database.ref().push({
        name: name,
        email: email,
        address: message,
    });
    return formReset();
});

function formReset() {
    name = $("#icon_prefix").val(" ");
    email = $("#icon_telephone").val(" ");
    address = $("#icon_message").val(" ");
}
