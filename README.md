#socket_demo
PS：运行方法

    (1) npm i
    (2) npm run start
##测试方法
    启动服务之后，同时打开两个页面，点击其中一个页面的测试按钮之后发现另一个页面会获取到新数据并进行渲染
##目录结构说明
<pre>
├── app.js //配置文件
├── bin
│   └── www //启动文件，内含socket.io配置
├── package-lock.json
├── package.json
├── routes
│   ├── index.js
│   └── users.js
├── socket
│   └── index.js //socket封装
└── views
    ├── error.ejs
    └── index.ejs //测试文件
</pre>