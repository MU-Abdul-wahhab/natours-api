const express = require("express");
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");
const reviewController = require("../controllers/reviewController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.post("/forgotpassword", authController.forgotPassword);
router.patch("/resetpassword/:token", authController.resetPassword);
router.patch(
  "/updatepassword",
  authController.protect,
  authController.updatePassword
);
router.patch("/updateme", authController.protect, userController.updateMe);
router.delete("/deleteme", authController.protect, userController.deleteMe);

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);



module.exports = router;
