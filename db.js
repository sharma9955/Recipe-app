const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/RecipeDB",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("MongoBD successfully connected");
    } else {
      console.log("error" + JSON.stringify(err, undefined, 2));
    }
  }
);

module.exports = mongoose;
