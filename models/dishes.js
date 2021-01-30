const mongoose = require("mongoose");
var dish = mongoose.model("dishes", {
  dishname: { type: String },
  ingredientsList: { type: String },
  quantity: { type: Number },
  unit: {type: Number},
  stepsToCook: {type: String},
  url: {type: String}
});

module.exports = { dish };
