import express, { Request, Response } from "express";
import http from "http";

const app = express();

const port = process.env.PORT || 3000;

app.get("/v1/users", (req: Request, res: Response) => {
  return res.status(200).json({
    users: [
      {
        id: 1,
        name: "John Doe",
      },
    ],
  });
});


const server = http.createServer(app)

server.listen(port, () => {
    console.log("app running on port", port)
})