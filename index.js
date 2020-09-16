const express = require('express');
const { createProxyMiddleware: httpProxy } = require('http-proxy-middleware');
const path = require('path');

const myProxy = function(option){
    option = option || {};
    const { port=3000, baseurl="/", target="", proxy={} } = option;
    const app = express();

    app.use(baseurl, express.static(path.join(__dirname, target)));
    
    Object.keys(proxy).map(key=>{
        app.use(key, httpProxy(proxy[key]));
    })
    
    app.listen(port, ()=>{
        console.log(`server is running on port ${port}`);
    })
}

module.exports = myProxy;
