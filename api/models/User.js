const { Model, DataTypes } = require('sequelize');
const db = require('../db');
const bcrypt = require('bcrypt');

/* interface UserAttributes{
    id: number,
    email: string,
    password: string,
    role: 'ADMIN_ROLE' | 'SUPERADMIN_ROLE' | 'USER_ROLE',
   posteds: Array<number>;
    created_at: Date,
    updated_at?: Date 
}
 */
class User extends Model {
  setHash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

User.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'Must be a valid email address',
        },
      },
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      default: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING,
    },
    favorites: {
      type:DataTypes.BOOLEAN,
      default: false,
    }
  },

  { sequelize: db, tableName: 'users' }
);

User.addHook('beforeCreate', user => {
  return bcrypt
    .genSalt(16)
    .then(salt => {
      user.salt = salt;
      return user.setHash(user.password, salt);
    })
    .then(hash => {
      user.password = hash;
    });
});

module.exports = User;
