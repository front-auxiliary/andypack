module.exports = {
  build:{
      enter:absolutepath('./src/'),
      output:{
          mini:true,
          path:absolutepath('./prod/')
      }
  },
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