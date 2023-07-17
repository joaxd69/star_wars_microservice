const { Router } = require("express");
const router = Router();

const data = require("../data");
const { Schemas } = require("../midlewares");

router.get("/:type", Schemas, async (req, res) => {
    const { id } = req.query;
    const { type } = req.params;
  if (id) {
    const info = await data[type].get(id);
    res.send(info);
  } else {
    const info = await data[type].list();
    res.send(info);
  }
});
module.exports = router;
