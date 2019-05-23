const pack = require('./andypack');
const path = require('path');

const absolutepath = (src)=>{
    return path.join(__dirname,src);
}
const config = {
    watch:[absolutepath('./src/css')],
    loaders:[
        {
            loader:'less',
            test:/\.less$/,
            include:[absolutepath('./src/css')],
            exclude:[],
            options:{}
        }
    ],
    server:{
        contentBase:absolutepath('./src'),
        host:'k.aixuexi.com',
        port:'80',
        proxy:{
            '/diy': {
                target: 'http://diy.aixuexi.com', // target host
                changeOrigin: true, // needed for virtual hosted sites
                ws: true, // proxy websockets
                pathRewrite: {
                '^/diy': '/diy', // rewrite path
                },
            },
        }
    }
}
pack(config);