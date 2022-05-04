const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Location extends Model {}

Location.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',
    },
);

module.exports = Location;