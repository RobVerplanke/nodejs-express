const express = require('express');
const app = express();

const userRoute = require('./routes/user.js');
const messageRouter = require('./routes/message.js');
const PORT = process.env.PORT || 5000;

// Routes
app.use('/user', userRoute);
app.use('/message', messageRouter);

// Route not found
app.use('*', (req, res) => {
  res.send('Error: Page not found');
});

app.listen(PORT, () => {
  console.log(`Express app running on PORT ${PORT}`);
});
