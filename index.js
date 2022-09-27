const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/guitar", async (_req, res) => {
  const result = await db.Guitar.findAll();
  res.status(200);
  res.json({ message: "succefully", data: result });
});

app.post("/guitar", async (req, res) => {
  const result = await db.Guitar.create(req.body);
  res.status(201);
  res.json({ message: "succefully", data: result });
});

app.put("/guitar", async (req, res) => {
  const id = req.body.id;
  const result = await db.Guitar.update(req.body, {
    where: {
      id: id,
    },
  });
  res.status(201);
  res.json({ message: "You've updated this Guitar", data: result });
});

app.delete("/guitar", async (req, res) => {
  const id = req.body.id;
  const result = await db.Guitar.findOne(req.body, {
    where: {
      id: id,
    },
  });
  await result.destroy();
  res.json({
    message: "You have deleted this Guitar from the list",
    data: result,
  });
});

app.listen(3000, () => {
  console.log("Nachi, estamos bien. ServerRunning");
});
