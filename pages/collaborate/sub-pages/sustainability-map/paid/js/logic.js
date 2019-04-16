let business_name;
let business_address;
let location_type_public;
let access_type;
let business_phone;
let business_email;
let contact_included;
let business_social_media;
let business_website;
let socials_included;
let location_type_nonprofit;
let location_type_small_business;
let location_type_corporate;
let location_type_government;
let water_refill;
let water_types;
let water_ice;
let water_shower;
let single_stream;
let multi_stream;
let recycle_multi_type;
let recycling_redemption;
let food_container;
let food_container_retail;
let food_vegan;
let food_vegetarian;
let food_local;
let food_farm_table;
let farm_table_farm;
let fair_trade;
let plastic_free;
let reduce_plastic;
let food_reduce_types;
let composting;
let green_waste;
let ev_charge_1;
let ev_charge_2;
let ev_charge_3;
let health_products;
let health_products_local;
let health_services;
let health_wellness;
let health_wellness_types;
let health_fitness;
let health_fitness_types;
let health_medical;
let health_other;
let nutrition_products;
let nutrition_services;
let nutrition_other;
let recreation_products;
let recreation_services;
let recreation_other;
let transportation_sharing;
let transportation_electric;
let transportation_bus;
let transportation_shuttle;
let transportation_airport;
let transportation_other;
let energy_solar;
let energy_battery;
let energy_biodiesel;
let energy_hydrogen;
let energy_wind;
let energy_hydroelectric;
let energy_products;
let energy_services;
let education_info;
let education_events;
let education_products;
let education_services;
let restroom;

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

document.getElementById('sustainForm').addEventListener('submit', submitToFirebase);
function submitToFirebase(e) {
    e.preventDefault();
    business_name = getTextFieldVal('business-name');
    business_address = getTextFieldVal('business-address');
    contact_included = getInputVal('contact-included');
    business_phone = getTextFieldVal('business-phone');
    business_email = getTextFieldVal('business-email');
    business_social_media = getTextFieldVal('business-social-media');
    business_website = getTextFieldVal('business-website');
    socials_included = getInputVal('socials-included');
    location_type_nonprofit = getGridRadioVal('loc-type-nonprofit');
    location_type_small_business = getGridRadioVal('loc-type-small-business');
    location_type_corporate = getGridRadioVal('loc-type-corporate');
    location_type_government = getGridRadioVal('loc-type-government');
    water_refill = getSelectVal('water-refill');
    water_types = getSelectVal('water-types');
    water_ice = getInputVal('water-ice');
    water_shower = getInputVal('water-shower');;
    single_stream = getGridRadioVal('recycling-single');
    multi_stream = getGridRadioVal('recycling-multi');
    recycle_multi_types = getSelectVal('recycling-multi-types');
    recycling_redemption = getGridRadioVal('recycling-redemption');
    food_container = getInputVal('food-container');
    food_container_retail = getInputVal('food-container-retail');
    food_vegan = getInputVal('food-vegan');
    food_vegetarian = getInputVal('food-vegetarian');
    food_local = getInputVal('food-local');
    food_farm_table = getInputVal('food-farm-table');
    farm_table_farm = getInputVal('farm-table-farm');
    fair_trade = getInputVal('fair-trade');
    plastic_free = getInputVal('food-plastic-free');
    reduce_plastic = getInputVal('food-plastic-reduce');
    food_reduce_types = getSelectVal('food-reduce-types');
    composting = getInputVal('composting');
    green_waste = getInputVal('composting-green-waste');
    ev_charge_1 = getInputVal('ev-chargin-level-1');
    ev_charge_2 = getInputVal('ev-chargin-level-2');
    ev_charge_3 = getInputVal('ev-chargin-level-3');
    health_products = getInputVal('health-products');
    health_products_local = getInputVal('health-products-local');
    health_services = getInputVal('health-services');
    health_wellness = getInputVal('health-wellness');
    health_wellness_types = getSelectVal('health-wellness-types');
    health_fitness = getInputVal('health-fitness');
    health_fitness_types = getSelectVal('health-fitness-types');
    health_medical = getInputVal('health-medical');
    health_other = getInputVal('health-other');
    nutrition_products = getInputVal('nutrition-products');
    nutrition_services = getInputVal('nutrition-services');
    nutrition_other = getInputVal('nutrition-other');
    recreation_products = getInputVal('recreation-products');
    recreation_services = getInputVal('recreation-services');
    recreation_other = getInputVal('recreation-other');
    transportation_sharing = getInputVal('transportation-sharing');
    transportation_electric = getInputVal('transportation-electric');
    transportation_bus = getInputVal('transportation-bus');
    transportation_shuttle = getInputVal('transportation-shuttle');
    transportation_airport = getInputVal('transportation-airport');
    transportation_other = getInputVal('transportation-other');
    energy_solar = getInputVal('energy-solar');
    energy_battery = getInputVal('energy-battery');
    energy_biodiesel = getInputVal('energy-biodiesel');
    energy_hydrogen = getInputVal('energy-hydrogen');
    energy_wind = getInputVal('energy-wind');
    energy_hydroelectric = getInputVal('energy-hydroelectric');
    energy_products = getInputVal('energy-products');
    energy_services = getInputVal('energy-services');
    education_info = getInputVal('education-info');
    education_events = getInputVal('education-events');
    education_products = getInputVal('education-products');
    education_services = getInputVal('education-services');
    restroom = getSelectVal('restroom');
    console.log("form submitted successfully");
    // console.log(business_name, business_address, business_email, business_phone, contact_included, business_social_media, business_website, socials_included, location_type_corporate, location_type_government, location_type_nonprofit, location_type_small_business, water_ice, water_refill, water_shower, water_types, single_stream, multi_stream, recycle_multi_types, recycling_redemption, food_container, food_container_retail, food_vegan, food_vegetarian, food_local, food_reduce_types, food_farm_table, farm_table_farm, fair_trade, reduce_plastic, plastic_free, composting, green_waste, ev_charge_1, ev_charge_2, ev_charge_3, health_products, health_products_local, health_services, health_medical, health_other, health_fitness, health_fitness_types, health_wellness, health_wellness_types, nutrition_products, nutrition_services, nutrition_other, recreation_services, recreation_products, recreation_other, transportation_sharing, transportation_electric, transportation_bus, transportation_shuttle, transportation_airport, transportation_other, energy_solar, energy_battery, energy_biodiesel, energy_hydrogen, energy_wind, energy_hydroelectric, energy_products, energy_services, education_info, education_events, education_products, education_services, restroom);
    let firebaseRef = database.ref("SustainabilityMap");
    firebaseRef.push({
        Business_Name: business_name,
        Business_Address: business_address,
        Contact_Included: contact_included,
        Business_Email: business_email,
        Business_Phone: business_phone,
        Business_Socials: business_social_media,
        Business_Website: business_website,
        Socials_Included: socials_included,
        Non_Profit: location_type_nonprofit,
        Small_Business: location_type_small_business,
        Corporate: location_type_corporate,
        Government: location_type_government,
        Water_Refill: water_refill,
        Water_Types: water_types,
        Water_Ice: water_ice,
        Water_Shower: water_shower,
        Single_Stream: single_stream,
        Multi_Stream: multi_stream,
        Recycle_Multi_Type: recycle_multi_types,
        Recycling_Redemption: recycling_redemption,
        Food_Container: food_container,
        Food_Container_Retail: food_container_retail,
        Food_Vegan: food_vegan,
        Food_Vegetarian: food_vegetarian,
        Food_Local: food_local,
        Food_Farm_Table: food_farm_table,
        Farm_Table_Farm: farm_table_farm,
        Fair_Trade: fair_trade,
        Plastic_Free: plastic_free,
        Reduce_Plastic: reduce_plastic,
        Food_Reduce_Type: food_reduce_types,
        Composting: composting,
        GreenWaste: green_waste,
        EV_Charge_Lvl1: ev_charge_1,
        EV_Charge_Lvl2: ev_charge_2,
        EV_Charge_Lvl3: ev_charge_3,
        Health_Products: health_products,
        Health_Products_Local: health_products_local,
        Health_Services: health_services,
        Health_Wellness: health_wellness,
        Health_Wellness_Types: health_wellness_types,
        Health_Fitness: health_fitness,
        Health_Medical: health_medical,
        Health_Other: health_other,
        Recreation_Products: recreation_products,
        Recreation_Services: recreation_services,
        Recreation_Other: recreation_other,
        Transportation_Sharing: transportation_sharing,
        Transportation_Electric: transportation_electric,
        Transportation_Bus: transportation_bus,
        Transportation_Shuttle: transportation_shuttle,
        Transportation_Airport: transportation_airport,
        Transportation_Other: transportation_other,
        Energy_Solar: energy_solar,
        Energy_Battery: energy_battery,
        Energy_Biodiesel: energy_biodiesel,
        Energy_Hydrogen: energy_hydrogen,
        Energy_Wind: energy_wind,
        Energy_Hydroelectric: energy_hydroelectric,
        Energy_Products: energy_products,
        Energy_Services: energy_services,
        Education_Info: education_info,
        Education_Events: education_events,
        Education_Products: education_products,
        Education_Services: education_services,
        Restroom: restroom
    });
    // return document.getElementById("sustainForm").reset(); 
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