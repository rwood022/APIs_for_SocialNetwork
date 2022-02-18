const router = require ("express").Router();

const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction,
} = require("../../controllers/thoughtscontrollers");

// api/thoughts
router.route("/").get(getAllThoughts);

// api/thought:id
router.route("/:thoughtId")
    .get(getSingleThought)
    .post(createThought)
    .put(updateThought)
    .delete(removeThought);

router.route("/api/thoughts/:thoughtId/reactions").post(addReaction).delete(removeReaction);

module.exports = router