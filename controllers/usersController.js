// controllers/usersController.js
const User = require("../models/user");

// Fetch all users
async function getUsers(req, res) {
  try {
    const users = await User.findAll();
    if (users.length === 0) {
      return res
        .status(404)
        .json({ status: "failed", message: "No users found" });
    }
    res.status(200).json({ status: "success", data: users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "failed", error: "Internal Server Error" });
  }
}

// Fetch user by ID
async function getUserById(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res
        .status(404)
        .json({ status: "failed", message: "User not found" });
    }
    res.status(200).json({ status: "success", data: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "failed", error: "Internal Server Error" });
  }
}

// Create a new user
async function createUser(req, res) {
  const { first_name, last_name, email, department, designation } = req.body;
  try {
    const newUser = await User.create({
      first_name,
      last_name,
      email,
      department,
      designation,
    });
    res
      .status(201)
      .json({
        status: "success",
        message: "User created successfully",
        data: newUser,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "failed", error: "Internal Server Error" });
  }
}

// Update an existing user
async function updateUser(req, res) {
  const { id } = req.params;
  const { first_name, last_name, email, department, designation } = req.body;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res
        .status(404)
        .json({ status: "failed", message: "User not found" });
    }
    await user.update({
      first_name,
      last_name,
      email,
      department,
      designation,
    });
    res
      .status(200)
      .json({
        status: "success",
        message: "User updated successfully",
        data: user,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "failed", error: "Internal Server Error" });
  }
}

// Delete a user by ID
async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res
        .status(404)
        .json({ status: "failed", message: "User not found" });
    }
    await user.destroy();
    res
      .status(200)
      .json({ status: "success", message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "failed", error: "Internal Server Error" });
  }
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
