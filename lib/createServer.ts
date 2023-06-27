import http from "node:http";
import { EventEmitter } from "node:events";
import merge from "./utils/merge";

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
  private callStacks: Function[] = [];

  constructor(private options: ServerOptions) {
    super();
    this.options = options;
    this.server;
    this.start();
    merge(this, methods);
  }

  applyMiddleware(fn: any[]) {
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

const methods: any = {};

(function invokeHttpMethods() {
  http.METHODS.forEach((method) => {
    methods[method.toLowerCase()] = function (req: any, res: any, next: any) {
      router();
    };
  });
})();

function router() {}

console.log(new Server({}));

export default Server;
