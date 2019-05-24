const hbs = require("handlebars");
const http = require("http");
const fs = require("fs");
require("./helper/partial");

const indexPage = fs
    .readFileSync(require.resolve("./views/index.hbs"))
    .toString();

var context = {
    title: "handlebars partial demo",
    content: [
        "示例文本",
        "示例文本",
        "示例文本",
        "示例文本",
        "示例文本",
        "示例文本",
        "示例文本",
        "示例文本",
        "示例文本",
        "示例文本",
        "示例文本",
        "示例文本",
        "示例文本",
        "示例文本",
        "示例文本",
        "示例文本",
        "示例文本"
    ]
};

http.createServer(function(req, res) {
    if (req.url === "/favicon.ico") return;

    var template = hbs.compile(indexPage);

    res.end(template(context));
}).listen(8001, function() {
    console.log("listening http://127.0.0.1:8001");
});
