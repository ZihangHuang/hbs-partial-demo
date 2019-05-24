const hbs = require("handlebars");
const fs = require("fs");

function readCommonFile(file) {
    return fs
        .readFileSync(require.resolve("../views/common/" + file))
        .toString();
}

hbs.registerPartial("layout", readCommonFile("layout.hbs"));

hbs.registerPartial("head", readCommonFile("head.hbs"));

hbs.registerPartial("footer", readCommonFile("footer.hbs"));

hbs.registerPartial("header", readCommonFile("header.hbs"));
