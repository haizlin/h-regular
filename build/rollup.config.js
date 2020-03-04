const util = require("./util");
const babel = require("rollup-plugin-babel");
const nodeResolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");

const extensions = [".js", ".ts", ".tsx"];

const babelOptions = {
    extensions,
    runtimeHelpers: true,
    presets: [
        [
            "@babel/env",
            {
                modules: false,
                targets: {
                    node: "12.9.1"
                }
            }
        ]
    ]
};

module.exports = {
    input: util.resolve("src/index.js"),
    plugins: [
        nodeResolve({ extensions }),
        commonjs({ extensions, ignore: ["conditional-runtime-dependency"] }),
        babel(babelOptions)
    ],
    external: ["schema-verify"]
};
