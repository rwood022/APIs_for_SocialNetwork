const router = require ("express").Router();
const userRoutes = require("./user");

router.use("/users", userRoutes);
router.use("/thought", thoughtRoutes);

module.exports = router;