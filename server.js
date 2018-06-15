const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));

// PathLocationStrategy
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

const port = process.env.PORT || 8080;
app.listen(port, "0.0.0.0", () => {
  console.log(`Listening on port ${port}...`);
});