module.exports = {
    entry:"./src/index.tsx",
    output:{
        path:`${__dirname}/public`,
        filename:"bundle.js",
    },
    mode: "development",
    resolve:{
        extensions:[".ts", ".tsx", "jsx", ".js", ".json"]
    },
    module:{
        rules:[
            {
                test:/\.tsx$/,
                use:{
                    loader:"ts-loader"
                }
            },
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    {
                        loader:"css-loader"
                    }
                ]
            }
        ]
    }
}