const User = require("../models/user");

module.exports = {
    // get all users
    getAllUsers(req, res){
        User.find()
        .then((user) => req.json(user))
        .catch((err) => res.status(500).json(err));
    },
    // get single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .select('-__v')
        .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
    },
  // Create a user
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
// delete a user
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : User.deleteMany({ _id: { $in: user.thought }})
          )
    },
            //   : User.deleteMany({ _id: { $in:  } })
        //   )
        //   .then(() => res.json({ message: 'users deleted!' }))
        //   .catch((err) => res.status(500).json(err));
     
        // update a user
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
            !course
                ? res.status(404).json({ message: 'No user with this id!' })
                  : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // add friend to user's friend list
    addFriend(req, res) {
        console.log('You are adding a Friend');
        console.log(req.body);
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $addToSet: { friend: req.body } },
          { runValidators: true, new: true }
        )
          .then((user) =>
            !user
              ? res
                  .status(404)
                  .json({ message: 'No User found with that ID :(' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },
      // Remove friend from a user
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friend: { friendId: req.params.friendId } } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'No user found with that ID :(' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};