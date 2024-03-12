// viewRoutes.js

const express = require("express");
const viewsController = require("../controller/viewController");
const router = express.Router();

// Route to fetch recipes related to chicken
router.get("/recipes/:query", viewsController.getRecipe);
router.get("/", viewsController.search);
router.get("/login", viewsController.login);
module.exports = router;
