// if vs studio code gives you issues with es6 syntax uninstall eslint
let business_name;
let business_address;
let location_type_public;
let access_type;
let business_phone;
let business_email;
let contact_included;
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
    location_type_nonprofit = getGridRadioVal('loc-type-nonprofit')
    location_type_small_business = getGridRadioVal('loc-type-small-business')
    location_type_corporate = getGridRadioVal('loc-type-corporate')
    location_type_government = getGridRadioVal('loc-type-government')
    water_refill = getSelectVal('water-refill')
    water_types = getSelectVal('water-types')
    water_ice = getInputVal('water-ice')
    water_shower = getInputVal('water-shower')
    single_stream = getGridRadioVal('recycling-single')
    multi_stream = getGridRadioVal('recycling-multi')
    recycle_multi_types = getSelectVal('recycling-multi-types')
    recycling_redemption = getGridRadioVal('recycling-redemption')
    food_container = getInputVal('food-container')
    food_container_retail = getInputVal('food-container-retail')
    food_vegan = getInputVal('food-vegan')
    food_vegetarian = getInputVal('food-vegetarian')
    food_local = getInputVal('food-local')
    food_farm_table = getInputVal('food-farm-table')
    farm_table_farm = getInputVal('farm-table-farm')
    fair_trade = getInputVal('fair-trade')
    plastic_free = getInputVal('food-plastic-free')
    reduce_plastic = getInputVal('food-plastic-reduce')
    food_reduce_types = getSelectVal('food-reduce-types')
    composting = getInputVal('composting')
    green_waste = getInputVal('composting-green-waste')
    ev_charge_1 = getInputVal('ev-chargin-level-1')
    ev_charge_2 = getInputVal('ev-chargin-level-2')
    ev_charge_3 = getInputVal('ev-chargin-level-3')
    health_products = getInputVal('health-products')
    health_products_local = getInputVal('health-products-local')
    health_services = getInputVal('health-services')
    health_wellness = getInputVal('health-wellness')
    health_wellness_types = getSelectVal('health-wellness-types')
    health_fitness = getInputVal('health-fitness')
    health_fitness_types = getSelectVal('health-fitness-types')
    health_medical = getInputVal('health-medical')
    health_other = getInputVal('health-other')
    nutrition_products = getInputVal('nutrition-products')
    nutrition_services = getInputVal('nutrition-services')
    nutrition_other = getInputVal('nutrition-other')
    recreation_products = getInputVal('recreation-products')
    recreation_services = getInputVal('recreation-services')
    recreation_other = getInputVal('recreation-other')
    transportation_sharing = getInputVal('transportation-sharing')
    transportation_electric = getInputVal('transportation-electric')
    transportation_bus = getInputVal('transportation-bus')
    transportation_shuttle = getInputVal('transportation-shuttle')
    transportation_airport = getInputVal('transportation-airport')
    transportation_other = getInputVal('transportation-other')
    energy_solar = getInputVal('energy-solar')
    energy_battery = getInputVal('energy-battery')
    energy_biodiesel = getInputVal('energy-biodiesel')
    energy_hydrogen = getInputVal('energy-hydrogen')
    energy_wind = getInputVal('energy-wind')
    energy_hydroelectric = getInputVal('energy-hydroelectric')
    energy_products = getInputVal('energy-products')
    energy_services = getInputVal('energy-services')
    education_info = getInputVal('education-info')
    education_events = getInputVal('education-events')
    education_products = getInputVal('education-products')
    education_services = getInputVal('education-services')
    restroom = getSelectVal('restroom')
    console.log(business_name, business_address, business_email, business_phone, contact_included, location_type_corporate, location_type_government, location_type_nonprofit, location_type_small_business, water_ice, water_refill, water_shower, water_types, single_stream, multi_stream, recycle_multi_types, recycling_redemption, food_container, food_container_retail, food_vegan, food_vegetarian, food_local, food_reduce_types, food_farm_table, farm_table_farm, fair_trade, reduce_plastic, plastic_free, composting, green_waste, ev_charge_1, ev_charge_2, ev_charge_3, health_products, health_products_local, health_services, health_medical, health_other, health_fitness, health_fitness_types, health_wellness, health_wellness_types, nutrition_products, nutrition_services, nutrition_other, recreation_services, recreation_products, recreation_other, transportation_sharing, transportation_electric, transportation_bus, transportation_shuttle, transportation_airport, transportation_other, energy_solar, energy_battery, energy_biodiesel, energy_hydrogen, energy_wind, energy_hydroelectric, energy_products, energy_services, education_info, education_events, education_products, education_services, restroom);
    
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

// $("#submit-it").on("click", function (e) {
//     e.preventDefault();
//     location_type_public = $("#loc-type-public").val();
//     access_type = $("#access-type").val();
//     location_type_nonprofit = $("#loc-type-nonprofit").val();
//     location_type_small_business = $("#loc-type-small-business").val();
//     location_type_corporate = $("#loc-type-corporate").val();
//     location_type_government = $("#loc-type-government").val();
//     water_refill = $("#water-refill").val();
//     water_types = $("#water-types").val();
//     water_ice = $("#water-ice").val();
//     water_shower = $("#water-shower").val();
//     single_stream = $("#recycling-single").val();
//     multi_stream = $("#recycling-multi").val();
//     recycle_multi_type = $("#recycling-multi-types").val();
//     recycling_redemption = $("#recycling-redemption").val();
//     food_container = $("#food-container").val();
//     food_container_retail = $("#food-container-retail").val();
//     food_vegan = $("#food-vegan").val();
//     food_vegetarian = $("#food-vegetarian").val();
//     food_local = $("#food-local").val();
//     food_farm_table = S("#food-farm-table").val();
//     farm_table_farm = $("#farm-table-farm").val();
//     fair_trade = $("#fair-trade").val();
//     plastic_free = $("#food-plastic-free").val();
//     reduce_plastic = $("#food-plastic-reduce").val();
//     food_reduce_types = $("#food-reduce-types").val();
//     composting = $("#composting").val();
//     green_waste = $("#composting-green-waste").val();
//     ev_charge_1 = $("#ev-chargin-level-1").val();
//     ev_charge_2 = $("#ev-chargin-level-2").val();
//     ev_charge_3 = $("#ev-chargin-level-3").val();
//     health_products = $("#health-products").val();
//     health_products_local = $("#health-products-local").val();
//     health_services = $("#health-services").val();
//     health_wellness = $("#health-wellness").val();
//     health_wellness_types = $("#health-wellness-types").val();
//     health_fitness = $("#health-fitness").val();
//     health_fitness_types = $("#health-fitness-types").val();
//     health_medical = $("#health-medical").val();
//     health_other = $("#health-other").val();
//     nutrition_products = $("#nutrition-products").val();
//     nutrition_services = $("#nutrition-services").val();
//     nutrition_other = $("#nutrition-other").val();
//     recreation_products = $("#recreation-products").val();
//     recreation_services = $("#recreation-services").val();
//     recreation_other = $("#recreation-other").val();
//     transportation_sharing = $("#transportation-sharing").val();
//     transportation_electric = $("#transportation-electric").val();
//     transportation_bus = $("#transportation-bus").val();
//     transportation_shuttle = $("#transportation-shuttle").val();
//     transportation_airport = $("#transportation-airport").val();
//     transportation_other = $("#transportation-other").val();
//     energy_solar = $("#energy-solar").val();
//     energy_battery = $("#energy-battery").val();
//     energy_biodiesel = $("#energy-biodiesel").val();
//     energy_hydrogen = $("#energy-hydrogen").val();
//     energy_wind = $("#energy-wind").val();
//     energy_hydroelectric = $("#energy-hydroelectric").val();
//     energy_products = $("#energy-products").val();
//     energy_services = $("#energy-services").val();
//     education_info = $("#education-info").val();
//     education_events = $("#education-events").val();
//     education_products = $("#education-products").val();
//     education_services = $("#education-services").val();
//     restroom = $("#restroom").val();
//     var firebaseRef = databse.ref();

//    firebaseRef.push({
//      Public: location_type_public,
//      AccessType: access_type,
//      NonProfit: location_type_nonprofit,
//      SmallBusiness: location_type_small_business,
//      Corporate: location_type_corporate,
//      Government: location_type_government,
//      WaterRefill: water_refill,
//      WaterTypes: water_types,
//      WaterIce: water_ice,
//      WaterShower: water_shower,
//      SingleStream: single_stream,
//      MultiStream: multi_stream,
//      RecycleMultiType: recycle_multi_types,
//      RecyclingRedemption: recycling_redemption,
//      FoodContainer: food_container,
//      FoodContainerRetail: food_container_retail,
//      FoodVegan: food_vegan,
//      FoodVegetarian: food_vegetarian,
//      FoodLocal: food_local,
//      FoodFarmTable: food_farm_table,
//      FarmTableFarm: farm_table_farm,
//      FairTrade: fair_trade,
//      PlasticFree: plastic_free,
//      ReducePlastic: reduce_plastic,
//      FoodReduceType: food_reduce_types,
//      Composting: composting,
//      GreenWaste: green_waste,
//      EVChargeLvl1: ev_charge_1,
//      EVChargeLvl2: ev_charge_2,
//      EVChargeLvl3: ev_charge_3,
//      HealthProducts: health_products,
//      HealthProductsLocal: health_products_local,
//      HealthServices: health_services,
//      HealthWellness: health_wellness,
//      HealthWellnessTypes: health_wellness_types,
//      HealthFitness: health_fitness,
//      HealthMedical: health_medical,
//      HealthOther: health_other,
//      RecreationProducts: recreation_products,
//      RecreationServices: recreation_services,
//      RecreationOther: recreation_other,
//      TransportationSharing: transportation_sharing,
//      TransportationElectric: transportation_electric,
//      TransportationBus: transportation_bus,
//      TransportationShuttle: transportation_shuttle,
//      TransportationAirport: transportation_airport,
//      TransportationOther: transportation_other,
//      EnergySolar: energy_solar,
//      EnergyBattery: energy_battery,
//      EnergyBiodiesel: energy_biodiesel,
//      EnergyHydrogen: energy_hydrogen,
//      EnergyWind: energy_wind,
//      EnergyHydroelectric: energy_hydroelectric,
//      EnergyProducts: energy_products,
//      EnergyServices: energy_services,
//      EducationInfo: education_info,
//      EducationEvents: education_events,
//      EducationProducts: education_products,
//      EducationServices: education_services,
//      Restroom: restroom
//     });
//     // return formReset();
//     return false;
// });

// function formReset() {
//     location_type_public = $("#loc-type-public").val(" ");
//     access_type = $("#access-type").val(" ");
//     location_type_nonprofit = $("#loc-type-nonprofit").val(" ");
//     location_type_small_business = $("#loc-type-small-business").val(" ");
//     location_type_corporate = $("#loc-type-corporate").val(" ");
//     location_type_government = $("#loc-type-government").val(" ");
//     water_refill = $("#water-refill").val(" ");
//     water_types = $("#water-types").val(" ");
//     water_ice = $("#water-ice").val(" ");
//     water_shower = $("#water-shower").val(" ");
//     single_stream = $("#recycling-single").val(" ");
//     multi_stream = $("#recycling-multi").val();
//     recycle_multi_type = $("#recycling-multi-types").val(" ");
//     recycling_redemption = $("#recycling-redemption").val(" ");
//     food_container = $("#food-container").val(" ");
//     food_container_retail = $("#food-container-retail").val(" ");
//     food_vegan = $("#food-vegan").val(" ");
//     food_vegetarian = $("#food-vegetarian").val(" ");
//     food_local = $("#food-local").val();
//     food_farm_table = S("#food-farm-table").val(" ");
//     farm_table_farm = $("#farm-table-farm").val(" ");
//     fair_trade = $("#fair-trade").val(" ");
//     plastic_free = $("#food-plastic-free").val(" ");
//     reduce_plastic = $("#food-plastic-reduce").val(" ");
//     food_reduce_types = $("#food-reduce-types").val(" ");
//     composting = $("#composting").val(" ");
//     green_waste = $("#composting-green-waste").val(" ");
//     ev_charge_1 = $("#ev-chargin-level-1").val(" ");
//     ev_charge_2 = $("#ev-chargin-level-2").val(" ");
//     ev_charge_3 = $("#ev-chargin-level-3").val(" ");
//     health_products = $("#health-products").val(" ");
//     health_products_local = $("#health-products-local").val(" ");
//     health_services = $("#health-services").val(" ");
//     health_wellness = $("#health-wellness").val(" ");
//     health_wellness_types = $("#health-wellness-types").val(" ");
//     health_fitness = $("#health-fitness").val(" ");
//     health_fitness_types = $("#health-fitness-types").val(" ");
//     health_medical = $("#health-medical").val(" ");
//     health_other = $("#health-other").val(" ");
//     nutrition_products = $("#nutrition-products").val(" ");
//     nutrition_services = $("#nutrition-services").val(" ");
//     nutrition_other = $("#nutrition-other").val(" ");
//     recreation_products = $("#recreation-products").val(" ");
//     recreation_services = $("#recreation-services").val(" ");
//     recreation_other = $("#recreation-other").val(" ");
//     transportation_sharing = $("#transportation-sharing").val(" ");
//     transportation_electric = $("#transportation-electric").val(" ");
//     transportation_bus = $("#transportation-bus").val(" ");
//     transportation_shuttle = $("#transportation-shuttle").val(" ");
//     transportation_airport = $("#transportation-airport").val(" ");
//     transportation_other = $("#transportation-other").val(" ");
//     energy_solar = $("#energy-solar").val(" ");
//     energy_battery = $("#energy-battery").val(" ");
//     energy_biodiesel = $("#energy-biodiesel").val(" ");
//     energy_hydrogen = $("#energy-hydrogen").val(" ");
//     energy_wind = $("#energy-wind").val(" ");
//     energy_hydroelectric = $("#energy-hydroelectric").val(" ");
//     energy_products = $("#energy-products").val(" ");
//     energy_services = $("#energy-services").val(" ");
//     education_info = $("#education-info").val(" ");
//     education_events = $("#education-events").val(" ");
//     education_products = $("#education-products").val(" ");
//     education_services = $("#education-services").val(" ");
//     restroom = $("#restroom").val(" ");
// }