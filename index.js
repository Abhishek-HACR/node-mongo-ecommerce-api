require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order")
 
mongoose.connect(process.env.MONGO_URL)
.then(() =>console.log("db connected successfull!"))
.catch((err) => console.log("error connnecting to db" , err)
);

app.use(express.json());
app.use("/api/auth" , authRoute);
app.use("/api/users" , userRoute); 
app.use("/api/products" , productRoute);
app.use("/api/carts" , cartRoute);
app.use("/api/orders" , orderRoute)

app.listen(process.env.PORT, () => {
    console.log("backend server is running");
});