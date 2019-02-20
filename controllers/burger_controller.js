var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function (req, res) {
	burger.selectAll(function (data) {
		var hbsObject = {
			burger: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/burger/create", function (req, res) {
	burger.insertOne([
		"burger_name"
	], [
			req.body.burger_name
		], function (data) {
			res.redirect("/burger");
		});
});

router.put("/burger/update/:id", function (req, res) {
	var condition = "id = " + req.params.id;
	console.log("condition", condition);

	burger.updateOne({
		"eaten": req.body.devoured
	}, condition, function (data) {
		res.redirect("/burger")
	});
});

module.exports = router;