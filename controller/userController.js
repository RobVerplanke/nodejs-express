const { param } = require('../routes/user');

module.exports = {
  get: (req, res) => {
    const { id } = req.params;
    res.send(`User ID: ${id}`);
  },
};
