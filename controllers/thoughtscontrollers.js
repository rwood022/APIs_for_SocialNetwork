const Thought = require("../models/thought");
const User = require("../models/user");

module.exports = {

    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find()
          .then((thoughts) => res.json(thoughts))
          .catch((err) => res.status(500).json(err));
    },

    // get thought by id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
          .select('-__v')
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with that ID' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
    },

    // Add an assignment to a student
        addThought(req, res) {
        console.log('You are adding a thought');
        console.log(req.body);
        User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { thought: req.body } },
        { runValidators: true, new: true }
        )
        .then((user) =>
            !userId
            ? res
                .status(404)
                .json({ message: 'No user found with that ID :(' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
  
    },
};