import express from 'express';

export const app = express();

app.get('/', (req, res) => {
  res.json({ message: "ok", context: req.context.user });
});
