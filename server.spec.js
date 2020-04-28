<<<<<<< HEAD
=======

>>>>>>> 25cf192ed51f278aaf1b71fa488febcce5977505
const server = require("./server");
const request = require("supertest");

describe("the server root", () => {
  it("tests", async () => {
    expect(true).toBe(true);
  });

  describe("GET /", () => {
    it("returns", async () => {
      const res = await request(server).get("/");

      expect(res.status).toBe(200);
      expect(res.type).toMatch(/json/i);
      expect(res.body.message).toEqual("It's alive!");
    });
  });
<<<<<<< HEAD
}); 
=======
});
>>>>>>> 25cf192ed51f278aaf1b71fa488febcce5977505
