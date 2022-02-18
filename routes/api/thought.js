const router = require ("express").Router();

const {
    getAllThoughts,
    getSingleThought,
} = require("../../controllers/thoughtscontrollers");

// api/thoughts
router.route("/").get(getAllThoughts)

// api/thought:id
router.route("/:thoughtId")
    .get(getSingleThought)

module.exports = router