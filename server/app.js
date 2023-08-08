const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

// import routes
const todos = require("./routes/todoRoutes");

const app = express();

// Middleware

app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "5mb",
    extended: true,
  })
);

app.use(cors());

//ROUTES MIDDLEWARE
app.use("/api", todos);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("App is running on PORT", PORT);
});
