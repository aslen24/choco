const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/", itemController.getAll);
router.get("/:name",itemController.getOne);
router.post("/", itemController.add);



router.delete("/:id", itemController.remove);
router.put("/:id", itemController.update);

module.exports = router;

