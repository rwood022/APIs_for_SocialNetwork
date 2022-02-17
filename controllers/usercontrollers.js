const User = require("../models/user");

module.exports = {
    getAllUsers(req, res){
        User.find()
        .then((user) => req.json(user))
        .catch((err) => res.status(500).json(err));
    },

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
  // Create a course
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },

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
};