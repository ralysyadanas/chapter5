const path = require("path");
const fs = require("fs");
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const users = require("../data/users.json");

router.get("/", auth.loggedInUser, (req, res) => {
    if (req.user) {
        res.json({ ...req.user, password: "<classified>" });
    } else {
        res.redirect("/game/index.html");
    }
});

router.post("/signin", (req, res) => {
    const { username, password } = req.body;

    const [loggedInUser] = users.filter(
        (user) => user.username === username && user.password === password
    );

    if (loggedInUser) {
        fs.writeFileSync(
            `${path.dirname(__dirname)}${path.sep}data${
                path.sep
            }loggedInUser.json`,
            JSON.stringify(loggedInUser)
        );

        res.redirect("/");
    } else {
        res.render("login");;
    }
});

router.get("/signout", (req, res) => {
    fs.unlink(
        `${path.dirname(__dirname)}${path.sep}data${path.sep}loggedInUser.json`,
        (err) => {
            res.redirect("/");
        }
    );
});

module.exports = router;
