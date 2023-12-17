const router3 = require('express').Router();
const itemController = require("../controllers/item.controller");


router3.get("/", itemController.getAllCarts);
router3.post("/",itemController.addCart);
router3.delete("/:id", itemController.removeOneCart);
router3.delete("/", itemController.removeAllCarts);



module.exports = router3;