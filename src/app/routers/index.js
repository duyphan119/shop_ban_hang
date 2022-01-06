const siteRouter = require("./site.js");

module.exports.routes = function(app){
    app.use("/", siteRouter);
}
