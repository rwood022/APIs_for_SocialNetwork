const { Thought, User } = require("../models");
// const Thou = require("../models/user");

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

    // Add thought to a user
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

    // update a thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with this id!' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },

      // delete thought
      removeThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with that ID' })
              : Thought.deleteMany({ _id: { $in: thought.user } })
          )
          .then(() => res.json({ message: 'Thoughts and User deleted!' }))
          .catch((err) => res.status(500).json(err));
      },
      // add reaction to thought 
      addReaction(req, res) {
        console.log('You are adding a reaction');
        console.log(req.body);
        Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reaction: req.body } },
        { runValidators: true, new: true }
        )
        .then((thought) =>
            !thoughtId
            ? res
                .status(404)
                .json({ message: 'No thought found with that ID :(' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    // remove reaction from thought
    removeReaction(req, res) {
        Reaction.findOneAndDelete({ _id: req.params.reactionId })
          .then((reaction) =>
            !reaction
              ? res.status(404).json({ message: 'No reaction with that ID' })
              : Reaction.deleteMany({ _id: { $in: reaction.user } })
          )
          .then(() => res.json({ message: 'Reaction and Thought deleted!' }))
          .catch((err) => res.status(500).json(err));
      },
};