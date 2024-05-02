// routes/usersRoutes.js
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.get("/get_user", usersController.getUsers);
router.get("/:id", usersController.getUserById);
router.post("/create_user", usersController.createUser);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

module.exports = router;
