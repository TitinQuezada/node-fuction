const express = require("express");
const morgan = require("morgan");
const port = process.env.PORT || 3333;
const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var a = 1;

app.get("/prueba", (req, res) => {
  res.send(a.toString());
});

app.listen(port, () => {
  setInterval(() => {
    console.log(`heroku port ${process.env.port}`);

    console.log(`hola esta running ${port}`);
    a++;
    console.log(a);
  }, 2000);
});
