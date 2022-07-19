const express = require("express");

const router = express.Router();

router.get(":categoryId/products/:productId", (req, res) => {
  const { categoryId, productId } = req.params;

  return res.json({
    categoryId,
    productId,
  });
});

module.exports = router;
