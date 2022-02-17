const router = require ("express").Router();

const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require("../../controllers/usercontrollers");

// `/api/user`
router.route("/").get(getAllUsers);


// `/api/user/:userID
router
    .route("/:userId")
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// `/api/users/:userId/friends/:friendId`
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;