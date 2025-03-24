const express = require('express');
const app = express();
const userRouter = require('./routes/user.js');
const messageRouter = require('./routes/message.js');
const path = require('node:path');
const PORT = process.env.PORT || 5000;

// Render this in view template
const links = [
  { href: '/', text: 'Home' },
  { href: 'about', text: 'About' },
];

const users = ['Rose', 'Cake', 'Biff'];

const aboutContent = 'Story about myself...';

// Set static assets path
const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

// Use EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// View route index
app.get('/', (req, res) => {
  res.render('index', { links: links, users: users });
});

// Route to about page
app.get('/about', (req, res) => {
  res.render('about', { about: aboutContent });
});

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
