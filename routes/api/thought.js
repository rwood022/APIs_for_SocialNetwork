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
router.route("/_id")
    .get(getSingleThought)
    .post(createThought)
    .put(updateThought)
    .delete(removeThought);

router.route("/api/thoughts/:_id/reactions").post(addReaction).delete(removeReaction);

module.exports = router