const express = require("express");
const router = express.Router();

router.get("/data", async (req, res) => {
  res.json({ name: "Juan" });
});

module.exports = router;
