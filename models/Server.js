const express = require("express");
const cors = require("cors");
const { dbConecction } = require("../database/config.db");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = "/api/users";
    // Conect DB
    this.connectDB();
    // Middlewares
    this.middlewares();
    // Routes
    this.routes();
  }

  async connectDB() {
    await dbConecction();
  }

  middlewares() {
    // CORS
    this.app.use(cors());
    // Body's READ and PARSE
    this.app.use(express.json());
    // Public Directory
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usersPath, require("../routes/users.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running in port :: ${this.port}`);
    });
  }
}

module.exports = Server;
