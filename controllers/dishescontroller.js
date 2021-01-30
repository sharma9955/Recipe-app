const express = require("express");
var router = express.Router();

var { dish } = require("../models/dishes");
var ObjectId = require("mongoose").Types.ObjectId;

// => localhost:3000/dish/
router.get("/", (req, res) => {
  dish.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("errors" + JSON.stringify(err, undefined, 2));
    }
  });
});

router.get("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res
      .status(400)
      .send(`no dish is found with given id: ${req.params.id}`);
  }
  dish.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "erros in retrieving dishes" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.post("/", (req, res) => {
  var dis = new dish({
    dishname: req.body.dishname,
    ingredientsList: req.body.ingredientsList,
    quantity: req.body.quantity,
    unit: req.body.unit,
    stepsToCook: req.body.stepsToCook,
    url: req.body.url,
  });
  dis.save((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("errors" + JSON.stringify(err, undefined, 2));
    }
  });
});

router.put("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res
      .status(400)
      .send(`no dish is found with given id: ${req.params.id}`);
  }
  var dis = {
    dishname: req.body.dishname,
    ingredientsList: req.body.ingredientsList,
    quantity: req.body.quantity,
    unit: req.body.unit,
    stepsToCook: req.body.stepsToCook,
    url: req.body.url,
  };

  dish.findByIdAndUpdate(
    req.params.id,
    { $set: dis },
    { new: true },
    (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log("errors" + JSON.stringify(err, undefined, 2));
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res
      .status(400)
      .send(`no dish is found with given id: ${req.params.id}`);
  }
  dish.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("errors" + JSON.stringify(err, undefined, 2));
    }
  });
});

module.exports = router;
