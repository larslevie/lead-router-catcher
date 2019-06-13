const http = require("http");
const { promisify } = require("util");
const app = require("./app");

const server = http.createServer(app.callback());

process.once("SIGTERM", () => {
  console.info("SIGTERM signal received.");
  console.info("Closing HTTP server...");
  server.close(() => console.info("HTTP server closed"));
});

module.exports = async () => {
  console.info("Starting HTTP server...");
  await promisify(server.listen.bind(server, 8000))();
  console.info("🚀 HTTP server started.");
};
