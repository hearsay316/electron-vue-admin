const http = require("http");
http
  .createServer((req, res) => {
    // eslint-disable-next-line no-console
    console.log(req);
    let a = {
      code: 200,
      data: {
        desc: "登陆成功"
      }
    };
    res.end(JSON.stringify(a));
  })
  .listen("3000");
