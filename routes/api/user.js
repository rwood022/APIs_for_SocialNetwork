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
    .route("/:_id")
    .get(getSingleUser)
    .post(createUser)
    .put(updateUser)
    .delete(deleteUser);

// `/api/users/:userId/friends/:friendId`
router.route("/:_id/friends/:friend_id").post(addFriend).delete(removeFriend);

module.exports = router;