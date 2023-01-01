import express, { NextFunction, Request, Response } from "express";

const app = express(); 
const PORT = 3000; 

app.use(express.json()); 

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send("server-running");
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

export default app;