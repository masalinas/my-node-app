import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Node.js Backend Active', version: '1.0.0' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});