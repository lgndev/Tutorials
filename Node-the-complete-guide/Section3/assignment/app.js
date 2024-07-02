// create a server on port 3000
// handle tow routes
// - /
// - return some geeting text
// -- add a form with a username input
// -- input should submit a post request to /create-user
// - /users
// -- return a list of dummy users
// - /create-users
// -- parse incoming data and log to console

const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url == "/" && method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
            <head><title>Assignment 1</title></head>
            <body>
                <h1>Welcom to route /</h1>
                <form action="/create-user" method="POST">
                    <input type="text" name="username" />
                    <button type="submit">Add User</button>
                </form>
            </body>
        </html>
    `);
    return res.end();
  }

  if (url == "/users" && method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
            <head><title>Assignment 1</title></head>
            <body>
                <h1>Welcom to route /users</h1>
                <ul>
                    <li>user 1</li>
                    <li>user 2</>
                </ul>
            </body>
        </html>
    `);
    return res.end();
  }

  if (url == "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log("create-user: %s", message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
});

server.listen(3000);
