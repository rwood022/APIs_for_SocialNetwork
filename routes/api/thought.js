const router = require ("express").Router();

const {
    getAllThoughts
} = require("../../controllers/thoughtscontrollers");

router.route("/").get(getAllThoughts)

module.exports = router