const router = require ("express").Router();
const userRoutes = require("./user");

router.use("/user", userRoutes);
router.use("/thought", thoughtRoutes);

module.exports = router;