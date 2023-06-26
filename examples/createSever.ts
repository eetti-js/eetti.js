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
]);

server.route("api/v1.user").use(() => {});
