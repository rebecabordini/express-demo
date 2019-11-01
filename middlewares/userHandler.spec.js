const userHandler = require("../middlewares/userHandler");

describe("userHandler", () => {
  it("sets userName on request", async () => {
    jest.setTimeout(10000);
    const mockedNextMiddleware = jest.fn(() => true);
    const mockedRequest = {
      body: {},
      statusCode: null,
      method: "GET"
    };
    const mockedResponse = { output: [] };
    await userHandler(mockedRequest, mockedResponse, mockedNextMiddleware);
    expect(mockedNextMiddleware.mock.calls.length).toEqual(1);
    expect(mockedRequest.userName).toEqual("Rebeca");
  });
});
