const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

/* Home page */
router.get("/", auth.loggedInUser, (req, res) => {
    res.render("index", {
        title: "Binar Academy Challenge Chapter 5",
        user: req.user,
    });
});

/* Game page */
router.get("/game", auth.loggedInUser, (req, res) => {
    if (req.user) {
        res.render("game", { title: "ROCK PAPER SCISSORS" });
    } else {
        res.redirect("/game/index.html");
    }
});

module.exports = router;
