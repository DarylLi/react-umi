const path = require("path");
const {DllPlugin} = require("webpack");
const {merge} = require("webpack-merge")

const commonConfig = ()=>{
    return {
        context: path.resolve(__dirname, "../"),
        entry: {
            common_react:["daryl-rollup-demo","axios","vue"]
        },
        output: {
           path:path.resolve(__dirname,"../dll"),
            filename:"[name].js",
            library:"[name]_library"
        },
        plugins: [
            new DllPlugin({
                path: path.resolve(__dirname, '../dll/[name]-manifest.json'),
                name: '[name]_library', 
            })
        ]
    }
}

module.exports = function (env) {
    const isProduction = env.production;
    process.env.NODE_ENV = isProduction ? "production" : "development"

	return commonConfig()
}