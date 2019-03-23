let express = require("express");
let router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET About page. */
router.get("/about", function(req, res, next) {
  res.render("index", { title: "About" });
});

/* GET products page. */
router.get("/products", function(req, res, next) {
  res.render("index", { title: "Services" });
});

/* GET services page. */
router.get("/services", function(req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET contact page. */
router.get("/contact", function(req, res, next) {
  res.render("index", { title: "Contact" });
});

module.exports = router;
