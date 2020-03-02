const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('./auth-model');

// // host/api/auth/
// router.get('/', async (req, res) => {
//   try {
//     const users = await db.find();
//     res.status(200).json({ users });
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// })

// host/api/auth/register
router.post('/register', async (req, res) => {
  try {
    let user = req.body;
    user.password = bcrypt.hashSync(user.password, 2);
    const newUser = await db.add(user);
    res.status(201).json({ newUser });
  } catch (error) {

    res.status(500).json({ error });
  }
})

// host/api/auth/login
//return userID and Token and UserType
router.post('/login', async (req, res) => {
  const { id, username, password } = req.body;
  Users.findBy(username)
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        //Token
        const token = generateToken(user);
        res.status(200).json({
          //Below will give the UserID, then username/type, token
          id: id,
          username: username,
          userType: user.userType,
          token
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// host/api/auth/
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await db.removeUser(id);
    if (deleted.length > 0) {
      res.status(204);
    } else {
      res.status(401).json({ message: "User not found." });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
})

module.exports = router;