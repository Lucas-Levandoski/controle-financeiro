import express from 'express';

const app = express();

app.listen(3333);

app.get('/', (req: any, res: any) => {
  return res.send('Hello World I am inside docker and it catches random updates!');
});	

export default app;