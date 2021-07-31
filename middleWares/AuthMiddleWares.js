const jwt = require("jsonwebtoken");
const User = require("../model/user");


module.exports = async function (req, res, next) {
    const token = req.cookies["auth-token"];
    if (!token) {
        res.locals.user = req.user = null;
        res.redirect("login")
    }
    else {
        try {
            const verifiedToken = jwt.verify(token, "Summaries is a good place")
            let user = await User.findById(verifiedToken._id);
            res.locals.user = req.user = user;
            next();

        } catch {
            res.locals.user = req.user = null;
            res.redirect("login")
        }
    }

}


