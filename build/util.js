const path = require("path");

const resolve = function(filePath) {
    return path.join(__dirname, "..", filePath);
};

module.exports = {
    resolve
};
