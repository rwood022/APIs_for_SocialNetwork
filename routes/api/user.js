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
router.route("/").get(getAllUsers).post(createUser);


// `/api/user/:userID
// router
//     .route("/_id")
//     .get(getSingleUser)
//     .put(updateUser)
//     .delete(deleteUser);

// `/api/user/:userId/friends/:friendId`
router.route("/_id/friends/friend_id").post(addFriend).delete(removeFriend);

module.exports = router;