let public_space_name;
let public_space_address;
let location_type_public;
let lifeguards;
let restrooms;
let showers;
let recycling;

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
function submitPubToFirebase(e) {
    e.preventDefault();
    location_type_public = getGridRadioVal('loc-type-public');
    access_type = getSelectVal('access-type')
    public_space_name = getTextFieldVal('public-space-name');
    public_space_address = getTextFieldVal('public-space-address');
    lifeguards = getTextFieldVal('lifeguards');
    restrooms = getTextFieldVal('restrooms');
    showers = getTextFieldVal('showers');
    recycling = getTextFieldVal('recycling');
    console.log("form submitted successfully");
    // console.log(public_space_name, public_space_address, location_type_public, access_type, lifeguards, restrooms, recycling);
    let firebaseRef = database.ref("PublicAccess");
    firebaseRef.push({
        Name: public_space_name,
        Address: public_space_address,
        AccessType: access_type,
        Lifeguards: lifeguards,
        Restrooms: restrooms,
        Recycling: recycling,
        Showers: showers,
        LocationTypePublic: location_type_public
    })

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