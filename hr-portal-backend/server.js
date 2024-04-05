const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Dummy authentication logic
  if (username === 'admin' && password === 'password') {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
