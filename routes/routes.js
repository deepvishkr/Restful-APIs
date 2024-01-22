const express = require('express');
//const app = express;
const router = express.Router()
const controllers = require("../controller/cntrols")


router.get("/get", controllers.get)
router.post("/post", controllers.post)
router.put("/put/:id", controllers.put)
router.delete("/delete/:id", controllers.delete)

module.exports = router;