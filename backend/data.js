const mongoose = require("mongoose");

const { MONGO_CONNECTION_STRING } = require("./config");

//mongodb connection
mongoose.connect(MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//lets check connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"))

//if it is alright then we call a callback function
db.once("open", () => {
  console.log("Success")
});

//we will make a schema
const kittySchema = new mongoose.Schema({
  name: String,
});


//lets compile our schema into the model
const Kitten = mongoose.model("Kitten",kittySchema);

//MongoDB Model
/* const Cat = mongoose.model("Cat",{ name: String }); */

//Create an Object
const KITTY = new Kitten({ name: "Zildjian" });
KITTY.save()

module.exports = {
  KITTY,
};
