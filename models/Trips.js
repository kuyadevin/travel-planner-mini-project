const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Trips extends Model {}

Trips.init(
    {
       id: {
           type: DataTypes.INTEGER,
           allowNull: false,
           primaryKey: true,
           autoIncrement: true,
       },
       trip_budget: {
           type: DataTypes.DECIMAL,
           allowNull: false,
       },
       traveller_amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
       },
       traveller_id: {
           type: DataTypes.INTEGER,
           allowNull: false,
           references: {
               model: 'Traveller',
               key: 'id',
           }
       },
       location_id: {
           type: DataTypes.INTEGER,
           allowNull: false,
           references: {
               model: 'Location',
               key: 'id',
           },
       },
    },
);

module.exports = Trips;
