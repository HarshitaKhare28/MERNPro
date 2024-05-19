require('dotenv').config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const contactRoute = require("./router/contact-router");

app.use(express.json());
app.use("/api/auth",router);
app.use("/api/form", contactRoute);
app.use(errorMiddleware);

const port = process.env.PORT;
connectDb().then(() => {
    app.listen(port, () => {
      console.log(`server is running at port: ${port}`);
    });
  });