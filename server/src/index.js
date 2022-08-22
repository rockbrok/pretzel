'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {
    var io = require("socket.io")(strapi.server.httpServer, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
      },
    });
    // console.log(strapi.server.httpServer); //check if working

    io.on("connection", async function (socket) {
      console.log(`a user connected`);
      // send message on user connection
      socket.emit(
        "hello",
        { message: "Welcome to my website" }
      );
    });
    strapi.io = io;
  },
};