const express = require("express");
const morgan = require("morgan");
const port = process.env.port || 3100;
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
    console.log(`hola esta running ${port}`);
    a++;
  }, 2000);
});
