module.exports = {
    entry: "./public/scripts/example.js",
    output: {
        path: __dirname + "/public/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['react']
                }
            }
        ]
    }
};