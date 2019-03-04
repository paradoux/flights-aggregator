const request = require("supertest")
const nock = require("nock")
const app = require("../index")

const {
  airMoonMockResult,
  airJazzMockResult,
  airBeamMockResult,
  expectedResultsFlightsEndpoint
} = require("./mocks")

const {flightsApiKey} = require("../config")

describe("Flights controller tests", () => {
  test("GET /api/flights", async () => {
    // Intercept external api calls and mock responses
    nock("https://my.api.mockaroo.com/")
      .defaultReplyHeaders({"access-control-allow-origin": "*"})
      .get(`/air-moon/flights?key=${flightsApiKey}`)
      .reply(200, airMoonMockResult)

    nock("https://my.api.mockaroo.com/")
      .defaultReplyHeaders({"access-control-allow-origin": "*"})
      .get(`/air-jazz/flights?key=${flightsApiKey}`)
      .reply(200, airJazzMockResult)

    nock("https://my.api.mockaroo.com/")
      .defaultReplyHeaders({"access-control-allow-origin": "*"})
      .get(`/air-beam/flights?key=${flightsApiKey}`)
      .reply(200, airBeamMockResult)
    // Check response from server is same as expected response
    const res = await request(app)
      .get("/api/flights")
      .set("Accept", "application/json")

    expect(res.status).toBe(200)
    expect(res.body).toEqual(expectedResultsFlightsEndpoint)
  })
})
