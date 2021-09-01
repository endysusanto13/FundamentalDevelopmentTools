<<<<<<< HEAD
=======
// comment 1
// comment 2

>>>>>>> 2014269 (test: add second comment)
const http = require("http");

const host = '0.0.0.0';
const port = 8000;

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});