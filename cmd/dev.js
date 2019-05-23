const pack = require("../andypack");
const config = require('./config');
const open = require('open');
pack.render('dev',config);
return ;
(async () => {
    await open('https://s.cn.bing.net/th?id=OJ.SJsi9Y4nIotKgg&w=75&h=75&dpr=1.25&pid=MSNJVFeeds', {wait: true});
    console.log('The image viewer app closed');
 
    // Opens the url in the default browser
    await open('https://sindresorhus.com',);
 
    // Specify the app to open in
    // await open('https://sindresorhus.com', {app: 'firefox'});
 
    // Specify app arguments
    // await open('https://sindresorhus.com', {app: ['google chrome', '--incognito']});
})();