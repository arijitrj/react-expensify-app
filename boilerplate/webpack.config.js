const path = require ('path');

module.exports =  {

    entry:"./src/app.js",
    output :{
        path:path.join(__dirname ,'public'),
        filename:"bundle.js"
    },
    module:{ // seting up loader for using babel core through babel loader 
        rules:[{ // seting up rule for loader 
            loader: 'babel-loader',
            test: /\.js$/ , // we are using this for which file we need to run this loader on like here it is mentioning js file , $ sing end the file . 
            exclude: /node_modules/  //exculding nodemodule folder which is ignoring the js file in node module folder 
            },
            {
                test:/\.s?css$/,  // ? defne optional to s css
                use:[
                    'style-loader', // we are using this two loader fro css file whenever webpack encunter any css file it will load them by the help of these loader 
                    'css-loader',
                    'sass-loader'
                ] 
            }]
    },
    devtool: "eval-cheap-module-source-map" ,// this help us to find out where the error is in on his or ginal position 
    devServer:{
        contentBase:path.join(__dirname ,'public')
    }
};

