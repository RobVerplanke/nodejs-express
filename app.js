const express = require('express');
const app = express();

const userRouter = require('./routes/user.js');
const messageRouter = require('./routes/message.js');
const PORT = process.env.PORT || 5000;

// Routes
app.use('/user', userRouter);
app.use('/message', messageRouter);

// Route not found
app.use('*', (req, res) => {
  res.send('Error: Page not found');
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Express app running on PORT ${PORT}`);
});
