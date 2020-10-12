// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");

// Sets up the Express App
// ============================================
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require("./models")

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Static Directory
app.use(express.static("public"));

// Include Express-handlebars as the default templating engine
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars")

// ROUTES
// ==================================
// SET VARIABLES xxxx = require ("ROUTE TO CORRESPONDING CONTROLLER")
const userRoutes = require("./controllers/userController.js");
const itemRoutes = require("./controllers/itemController.js")
app.use(userRoutes);
app.use(itemRoutes);


// THIS ONE DROPS THE TABLES
// db.sequelize.sync({force:true}).then(function() {
// THIS ONE DOESN'T DROP TABLES
db.sequelize.sync().then(function(){
  app.listen(PORT, function(){
    console.log(`Server listening on http://localhost:${PORT}`)
  });
});
