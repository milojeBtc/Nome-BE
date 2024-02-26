const controller = require("../controllers/verify.controller");

module.exports = function(app) {
    app.post("/api/verify", controller.verifyTokens);
}