const router2 = require('express').Router();
const itemController = require("../controllers/item.controller");


 router2.get("/", itemController.getAllUser);
router2.get("/:userName", itemController.getOneUser);
router2.post("/", itemController.addUser);



module.exports = router2;