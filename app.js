const express = require("express");
const app = express();
const port = 8000;

const phrase = "Bienvenue à l'univers TEST!";

app.get("/", (req, res) => {
  res.send(phrase);
  const r = calcul(3, 5, "+");
  console.log(r);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

module.exports = {
  app,
  phrase,
};
