const { User, List } = require('../schemas/index');
const logger = require('../utils/logger');

class ListModel {
  constructor(listObj) {
    this.list = listObj;
  }

  static Create(name, ownerId) {
    return new Promise((resolve, reject) => (
      User.findOne({ firebaseId: ownerId })
        .then((user) => {
          if (!user) {
            logger.error(`New list requested for non-existing user ${ownerId}.`);
            reject(new Error('User not found.'));
          }

          return List.create({
            name,
            owner: user._id,
            members: [user._id],
          })
            .then((list) => {
              user.lists.push(list._id);
              return user.save()
                .then(() => resolve(list))
                .catch(err => reject(err));
            })
            .catch(err => reject(err));
        })
        .catch(err => reject(err))
    ));
  }
}

module.exports = ListModel;
