const User = require('./User');
const Role = require('./Role');
const Property = require('./Property');
const Location = require('./Location');
const Category = require('./Category');
/* const Favorite = require('./Favorite'); */
//const PropertyCategory = require('./PropertyCategory');
//User.belongsTo(Role);


//Property.hasOne(Category);
Location.hasMany(Property/*  {through: 'PropertyLocation'} */);
Property.belongsTo(Location/* , {through: 'PropertyLocation'} */);

Category.hasMany(Property);/* {as: 'category', through: 'PropertyCategory'}); */
Property.belongsTo(Category);/* , {as: 'property', through: 'PropertyCategory'}); */

User.belongsToMany(Property, {as: 'user', through: 'favorite'});
Property.belongsToMany(User, {as: 'property', through: 'favorite'});

//Category.belongsTo(Property);
//Property.belongsToMany(Category, {as: 'categorias', through: 'property_category'})
//Category.belongsToMany(Property, {as: 'propiedades', through: 'property_category'});
/* User.belongsTo(Favorite, {as: 'userId', foreignKey: 'Favorites'}) */
//User.hasMany(Favorite,  {as: 'userId', foreignKey: 'Favorites'});
/*  Favorite.belongsTo(User)
 */
 module.exports = { User, Property, Location, Category};