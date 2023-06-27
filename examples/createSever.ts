import Eetti from "../index";

const server = new Eetti({
  port: 5000,
  host: "127.0.0.1",
  logger: process.env.NODE_ENV !== "production",
});

server.applyMiddleware([
  () => {},
  () => {},
  () => {},
  () => {},
  () => {},
  () => {},
  () => {},
  () => {},
  () => {},
]);

server.get("/", (req, res) => {
  res.send("Hello World!");
});

// if routes wants to be separate files
server.route("api/v1/user").use(() => {});
server.route("api/v1/products").use(() => {});
server.route("api/v1/customers").use(() => {});
server.route("api/v1/payments").use(() => {});

// if routes wants to be single files
server.get("/api/", (req, res) => {});
server.get("/api/", (req, res) => {}).applyMiddleware([() => {}, () => {}]);

// fallback function
server.fallback(() => {});
