const users = [
  { id: 1, name: 'Harry' },
  { id: 2, name: 'Theo' },
  { id: 3, name: 'Els' },
  { id: 4, name: 'Gert' },
  { id: 5, name: 'Miep' },
];

async function getUserById(userId) {
  return users.find((user) => user.id === userId);
}

module.exports = { getUserById };
