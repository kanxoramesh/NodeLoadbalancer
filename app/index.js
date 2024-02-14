const app = require('express')();
const appid= process.env.APPID

app.get('/', function (req, res) {
  res.send(`${appid}: listening on port ${appid} `);
});
app.listen(appid, function () {
  console.log(`Example app listening on port ${appid}!`);
});