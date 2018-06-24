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

  static AddItemById(listId, listitem, ownerId) {
    return new Promise((resolve, reject) => (
      List.findById(listId).populate('members')
        .then((list) => {
          const foundUser = list.members.find((member) => {
            return member.firebaseId === ownerId;
          });

          if (!foundUser) {
            reject(new Error('User is not a member of the list.'));
          }

          list.items.push({
            description: listitem.description,
            createdBy: foundUser._id,
          });

          return list.save()
            .then(() => resolve())
            .catch(err => reject(err));
        })
        .catch(err => reject(err))
    ));
  }
}

module.exports = ListModel;
