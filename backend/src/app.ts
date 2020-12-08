import express, { Response, Request, NextFunction } from 'express';
const app = express();
import cors from 'cors';

import weatherRouter from './routes/weather';

app.use(cors());
app.use(express.json());
app.use(weatherRouter);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error.message) {
    res.status(404).json({ error: 'Please provide a valid location.' });
  } else {
    res.status(500).send({ error: 'Internal server error' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
