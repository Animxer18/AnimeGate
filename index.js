
const express = require("express");
const app = express(); // create express app
const path = require("path");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "client/dist", "index.html"));
//  });
//  
app.get("/", (req, res) => {
  fetch("https://cdn.animixplay.to/api/search", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "Referer": "https://animixplay.to/",
    "Referrer-Policy": "origin"
  },
  "body": "qfast=my+he",
  "method": "POST"
}).then(resp => resp.json())
.then(json => {
res.send(json)
})
.catch(err => console.log(err));
 });
 
// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});