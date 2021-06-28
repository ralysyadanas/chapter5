const path = require("path");
const fs = require("fs");

const loggedInUser = (req, res, next) => {
    fs.readFile(
        `${path.dirname(__dirname)}${path.sep}data${path.sep}loggedInUser.json`,
        (err, data) => {
            if (err) {
                req.user = null;
            } else {
                const bufData = Buffer.from(data);
                const jsonData = JSON.parse(bufData.toString("utf-8"));
                req.user = jsonData;
            }

            next();
        }
    );
};

module.exports = {
    loggedInUser,
};
