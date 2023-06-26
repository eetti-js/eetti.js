import http from "node:http";
import { EventEmitter } from "node:events";

/**
 * @Description light weight node server framework for RESTful applications
 *
 * Copyright (c) 2022
 * MIT License
 *
 */

interface ServerOptions {
  logger?: boolean;
  keepalive?: boolean;
  connectionTimeout?: number;
  port?: number;
  host?: string;
  https?: boolean;
  databaseCredentials?: {
    name: string;
    password: string;
    username: string;
    type: string;
    migrations?: boolean;
  };
}

class Server extends EventEmitter {
  private server: any;
  private stacks: Function[] = [];

  constructor(private options: ServerOptions) {
    super();
    this.options = options;
    this.server;
    this.start();
  }

  applyMiddleware(fn: any[]) {
    return this;
  }

  get() {
    this.handleRoute("/");
    return this;
  }
  post() {
    this.handleRoute("/");
    return this;
  }
  put() {
    this.handleRoute("/");
    return this;
  }
  delete() {
    this.handleRoute("/");
    return this;
  }
  patch() {
    this.handleRoute("/");
    return this;
  }
  head() {
    this.handleRoute("/");
    return this;
  }
  all() {
    this.handleRoute("/");
    return this;
  }
  route(path: string) {
    return this;
  }
  use(module: any) {}
  fallback(errorHandler: any) {}

  private handleRoute(route: string) {}

  private executeMiddleware() {}

  start() {
    this.server = http.createServer();
    this.server.listen(this.options.port, this.options.host, () => {
      console.log(`Server listening on port ${this.options.port} and host`);
    });
  }
}

export default Server;
