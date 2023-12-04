const express = require('express');
const starwarsNames = require('starwars-names-fv');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(starwarsNames.random());
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
