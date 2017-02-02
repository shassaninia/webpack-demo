module.exports = {

    //define entry point
    entry: "./src/script1.js",

    //define output point
    output: {
        // folder and file will be created automatically when webpack is run.
        path: "dist", //
        filename: "bundle.js"
    },
    module: {
        //We can use multiple loaders in our projects
        loaders: [{
            test: /\.js$/, //Test for particular files and run on those files (e.g - files with .js extension)
            exclude: /(node_modules)/, //Exclude running loader on js files in the node_modules folder
            loader: "babel-loader", //specify which loader to use
            query: {
                presets: ["es2015"] //Speciifies what code we want to translate (in this case es2015)
            }
        },

        //style and css loader
        {
            test: /\.css$/, //only run on css files,
            loader:"style-loader!css-loader" //use style and css loader (notice ! to use them together)
        }
        
        ]
    }

}