const router = require ("express").Router();

const {
    getAllUsers
} = require("../../controllers/usercontrollers");

router.route("/").get(getAllUsers)

module.export = router;