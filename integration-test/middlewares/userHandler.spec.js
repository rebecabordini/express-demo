const request = require("supertest");
const app = require("../../app");

const userHandler = require("../../middlewares/userHandler");

describe("userHandler", () => {
  it("sets userName on request", done => {
    request(app)
      .get("/ping")
      .expect(200, "pong Rebeca", done);
  });
});
