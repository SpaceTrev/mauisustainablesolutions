// if vs studio code gives you issues with es6 syntax uninstall eslint
let public_space_name;
let public_space_address;
let location_type_public;

const config = {
    apiKey: "AIzaSyA0HO8LK7fqmGeWlKZjVYjgQn0tSmMlcZI",
    authDomain: "maui-sustainable-solutions.firebaseapp.com",
    databaseURL: "https://maui-sustainable-solutions.firebaseio.com",
    projectId: "maui-sustainable-solutions",
    storageBucket: "maui-sustainable-solutions.appspot.com",
    messagingSenderId: "258456429603"
};


firebase.initializeApp(config);
let database = firebase.database();

document.getElementById('publicForm').addEventListener('submit', submitPubToFirebase);
// TODO: Add function to gather checkbox value as well as add to multi select data or make a key so it isn't just numbers
function submitPubToFirebase(e) {
    e.preventDefault();
    location_type_public = getGridRadioVal('loc-type-public');
    access_type = getSelectVal('access-type')
    public_space_name = getTextFieldVal('public-space-name');
    public_space_address = getTextFieldVal('public-space-address');

    console.log(public_space_name, public_space_address, location_type_public, access_type);
}

function getInputVal(id) {
    return [document.getElementById(id).name, document.getElementById(id).checked];
}

function getTextFieldVal(id) {
    return [document.getElementById(id).name, document.getElementById(id).value];
}

function getSelectVal(id) {
    let selectedElement = document.getElementById(id);
    let selectedOptions = selectedElement.selectedOptions || [].filter.call(selectedElement.options, option => option.selected);
    let selectedValues = [].map.call(selectedOptions, option => option.value);
    return selectedValues;
}

function getGridRadioVal(id) {
    return [document.getElementById(id).value, document.getElementById(id).checked];
}