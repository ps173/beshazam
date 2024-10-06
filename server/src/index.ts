import express, { Application } from "express";

const app: Application = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express with TypeScript!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
