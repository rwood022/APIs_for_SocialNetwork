const router = require ("express").Router();

const {
    getAllReactions
} = require("../../controllers/reactioncontrollers");

router.route("/").get(getAllReactions)

module.exports = router