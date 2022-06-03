import express from 'express';

const app = express();

app.listen(3333);

app.get('/', (req: any, res: any) => {
  return res.send('Hello World!');
});	

export default app;