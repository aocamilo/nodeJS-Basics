const express = require("express");

const router = express.Router();

//Get Query params
router.get("/", (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send("No hay params");
  }
});

module.exports = router;
