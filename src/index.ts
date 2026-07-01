import * as express from "express";
import { Request, Response, Express } from "express";

const app: Express = express()
const PORT: number = 3000;
app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello 24G!');
});