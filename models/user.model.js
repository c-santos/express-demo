const { Sequelize, DataTypes, Model } = require('sequelize')
const db = require('../config/db')

class User extends Model {}

User.init({
    id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    middle_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    db,
    modelName: 'User',
    tableName: 'users',
})

console.log(User === db.models.User)