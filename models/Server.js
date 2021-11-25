const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    // Middlewares
    this.middlewares();
    // Routes
    this.routes();
  }

  middlewares() {
    // Public Directory
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.get("/api", (req, res) => {
      res.send("Hello World");
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running in port :: ${this.port}`);
    });
  }
}

module.exports = Server;
