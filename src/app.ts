import express from 'express';

const app = express();

app.listen(3333);

app.get('/', (req: express.Request, res: express.Response) => {
  const { test } = req.query;

  return res.send('Hello World I am inside docker and it catches random updates!' + test);
});

export default app;