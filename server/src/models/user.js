const bcrypt = require('bcryptjs')
function hashPassword (user, options) {
    const SALT_FACTOR = 8

    if (!user.changed('password')) {
        return
      }
    
    
    return bcrypt
    .genSalt(SALT_FACTOR)
    .then(salt => bcrypt.hash(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
      console.log(`pass: ${user.password} for user email ${user.email}`)
    })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      email: {
          type: DataTypes.STRING,
          unique: true
      },
      password: DataTypes.STRING
  }, {
      hooks: {
          beforeCreate: hashPassword
      }
  })
  
  User.prototype.comparePassword = function (password) {
      console.log('in compare:',password,'  ',this.password)
      return bcrypt.compare(password, this.password)
  }
  return User
}
