// import models
const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trips');

//Travellers have many locations
Traveller.hasMany(Location,{
    foreignKey:'traveller_id',
    unique: false
});

//location have many travellers through trips
