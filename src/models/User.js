const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {

      id:{
         type: DataTypes.INTEGER,
         //type: DataTypes.UUID,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
         //defaultValue:DataTypes.UUIDV4 
      },
      email:{
         type: DataTypes.STRING,
         allowNull: false,
         isEmail: true
      },

      password:{
         type: DataTypes.STRING,
         allowNull: false
      }
     
   }, { timestamps: false });
};
