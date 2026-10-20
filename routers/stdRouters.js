const express = require("express");

const router = express.Router()

const stdController = require("../controllers/stdController.js")

//fetch all data
router.get("/", stdController.sendStd)

//fetch single data
router.get("/:id", stdController.sendStdById)

//create
router.post("/", stdController.createStd)

//update
router.patch("/:id", stdController.updateStd)

//delete
router.delete("/:id", stdController.deleteStd)

module.exports = router