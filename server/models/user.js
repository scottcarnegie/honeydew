const { User } = require('../schemas/index');

class UserModel {
  constructor(dbUser) {
    this.user = dbUser;
  }

  static CreateUser({ firebaseId, firstName, lastName }) {
    const newUser = new User({
      firstName,
      lastName,
      firebaseId,
    });

    return new Promise((resolve, reject) => (
      newUser.save()
        .then((user) => {
          if (!user) {
            resolve(null);
          }

          resolve(new this(user));
        })
        .catch(err => reject(err))
    ));
  }
}

module.exports = UserModel;
