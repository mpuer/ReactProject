'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    userId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    image: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {});
  Listing.associate = function(models) {
    // associations can be defined here
    Listing.belongsTo(models.User, {foreignKey: 'userId'})
    Listing.hasMany(models.Review, {foreignKey: 'listingId'})
  };
  return Listing;
};
