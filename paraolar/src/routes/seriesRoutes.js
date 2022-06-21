const controller = require("../controllers/seriesController")

const express = require("express")

const router = express.Router()

router.get("/", controller.getAll)

router.get("/catalogo/:id", controller.getById)

router.post("/criar", controller.createSerie)

module.exports = router