const db = require('../db.js');
const CustomNotFoundError = require('../errors/CustomNotFoundError.js');

const asyncHandler = require('express-async-handler');

const getUserById = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const user = await db.getUserById(Number(userId));

  if (!user) {
    throw new CustomNotFoundError('User not found');
  }

  res.send(`User Name: ${user.name}`);
});

module.exports = { getUserById };
