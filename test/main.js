/* ====== create node.js server with express.js framework ====== */
// dependencies
const express = require("express");
// import { ANIME } from '@consumet/extensions';
const {ANIME} = require('@consumet/extensions')
// const animepahe  = new ANIME.AnimePahe();
const nineanime = await ANIME.NineAnime.create();
const app = express();

app.get("/", (req, res) => {
    nineanime.search("My hero academia").then(data => {
        res.send(data)
      })
});


// PORT
const PORT = 3000;

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});