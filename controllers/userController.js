const express = require ("express");

const router = express.Router();

const db = require ("../models")



// Post Route
router.post("/api/users", (req,res)=>{
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }

    db.user.create(newUser)
        .then((newUser)=>{
            console.log(newUser);
            res.json({
                message: "Created new user",
                success: true,
            })
        })
        .catch((err)=>{
            console.log(err)
        })
});

module.exports = router;