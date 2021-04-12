const User = require("../models/user")

exports.signup = (req, res) => {
    const user = new User(req.body);
    user.save((user, err) => {
        if(err){
            return res.status(400).json({
                err: "NOT able to save user in DataBase"
            });
        }
        res.json(user);
    });
};

exports.signout = (req, res) => {
    res.json({
        message: "User Signout"
    });
};

