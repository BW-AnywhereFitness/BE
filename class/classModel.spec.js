const db = require("../database/db-config");
const Classes = require("./class-model");

describe("class model", function () {
  beforeEach(async () => {
    await db("class").truncate();
  })

describe("adds new class", function () {
  it("adds new class", async function () {
    await Classes.addClass({
      "instructor_id": 1,
      "name": "Cycling 101",
      "type": "cycling",
      "start_time": "3 PM",
      "duration": "1 hour",
      "intensity": 7,
      "location": "Anywhere",
      "register_attendees": 15,
      "max_size": 30
    })

    const classes = await db("class");
    expect(classes).toHaveLength(1)
  })
})

describe("deletes class", function(){
  it("deletes class", async function(){
    await Classes.addClass({
        "instructor_id": 1,
        "name": "Cycling 101",
        "type": "cycling",
        "start_time": "3 PM",
        "duration": "1 hour",
        "intensity": 7,
        "location": "Anywhere",
        "register_attendees": 15,
        "max_size": 30
    })
    await Classes.addClass({
        "instructor_id": 2,
        "name": "Cross fit 101",
        "type": "Cross fit",
        "start_time": "5 PM",
        "duration": "1 hour",
        "intensity": 10,
        "location": "Anywhere",
        "register_attendees": 12,
        "max_size": 20,
    })

    await Classes.remove(1);
    const classes = await db("class")
   
    expect(classes).toHaveLength(1)
    })
  })
});