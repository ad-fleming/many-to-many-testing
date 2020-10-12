const express = require("express");
const router = express.Router();
const db = require ("../models");


// Post Route
router.post("/api/items", (req,res)=>{
    const newItem = {
        name: req.body.name,
        category: req.body.category
    }

    db.item.create(newItem)
        .then((newItem)=>{
            console.log(newItem);
            res.json({
                message: "Created new item",
                success: true
            })
        })
        .catch((err)=>{
            console.log(err);
            res.status(500);
            res.json({
                success: false,
                message: "An error occurred adding your item to the database."
            })
        })
})

module.exports = router;