let express = require("express");
let router = express.Router();
let home = require('app/views/portfolio/src/app.js');

router.get("/", (req, res) => {  
        res.send(home)
});