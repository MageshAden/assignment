// utils/errorHandler.js
function errorHandler(res, error) {
  console.error("Error:", error);
  res.status(500).json({ error: "Internal Server Error" });
}

module.exports = {
  errorHandler,
};
