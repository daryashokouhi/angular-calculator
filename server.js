const express = require('express')
const app = express();

app.get('src/index.html', function (req, res) {
    console.log("works");
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});