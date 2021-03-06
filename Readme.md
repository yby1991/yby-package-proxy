### yby-package-proxy

#### use packages
```
express http-proxy-middleware
```

#### config
```js
{
    port:3000,// 服务的端口
    baseurl:"/",// 前端资源访问的基本路径
    target:"",// 前端资源的路径
    proxy:{// 代理的规则
        '/api':{
            target:"http://localhost:4000",
            changeOrigin:true,
            pathRewrite:{
                '^/api/':'/'
            }
        }
    }
}
```

#### usage
```
const myProxy = require('yby-package-proxy');

myProxy({
    port:4000,
    target:"../../demo/demo",
    proxy:{
        "/api":{
            target:"http://localhost:3000",
            changeOrigin:true,
            pathRewrite:{
                "^/api/":"/"
            }
        },
    }
});

```

### versions

1.0.1 depends
    "express": "^4.17.1",
    "http-proxy-middleware": "^1.0.5"

1.0.0 depends
    "express": "^4.17.1",
    "http-proxy-middleware": "^0.19.1"