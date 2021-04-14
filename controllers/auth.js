const User = require("../models/user")

exports.signup = (req, res) => {
    const user = new User(req.body);
    user.password = "1234";
    user.save((err, user) => {
        console.log(err, user)
        if(err){
            return res.status(400).json({
                err: "NOT able to save user in DataBase"
            });
        }
        res.json({
            name: user.name,
            email: user.email,
            id: user._id
        });     
    });
};


exports.signout = (req, res) => {
    res.json({
        message: "User Signout"
    });
};

