let express = require('express');
let axios = require('axios');

let app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

let crimeApiUrl = "https://data.lacity.org/resource/y9pe-qdrd.json?$where=date_occ%20between%20%272015-10-01T12:00:00%27%20and%20%272016-01-01T00:00:00%27";

app.get('/', (req, res) => {
  this.serverRequest = axios.get(crimeApiUrl)
    .then((response) => {
      res.send(response.data);
    })
})

app.listen(3001, () => {
  console.log('listening on port 3001');
});

