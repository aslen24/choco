const express = require("express");
const itemRoutes = require('./routes/item.routes')
const itemRoutes2 = require('./routes/item.routes2')
const itemRoutes3=require('./routes/item.routes3')

// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const db = require('./database-mysql');
const cors=require('cors');

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use(cors())
app.use("/api/choco", itemRoutes);
app.use("/api/user", itemRoutes2);
app.use("/api/cart", itemRoutes3);


app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
