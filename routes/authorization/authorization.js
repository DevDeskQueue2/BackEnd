const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Users = require('./auth-model');

const jwt = require('jsonwebtoken'); // installed this library
const secrets = require('./config/secrets.js');

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
router.post('/register', (req, res) => {
  let user = req.body;

  const hash = bcrypt.hashSync(user.password, 2);
  user.password = hash;

  console.log(user);

  Users.add(user)
<<<<<<< HEAD
    .then(savedUser => {
      res.status(201).json({ created_user: savedUser, token: token });
=======
    .then(id => {
      // generate the token for the user
      // const token = genToken(savedUser);

      res.status(201).json({id: id[0], ...user});
>>>>>>> 790944d9abd18705cb64e07ba36d568c72d5636e
    })
    .catch(err => {
      res.status(500).json({
        message: 'Error adding the user to the database', error: err
      });
    });
});

// host/api/auth/login
//return userID and Token and UserType
router.post('/login', (req, res) => {
  const {username, password } = req.body;

  console.log(username);

  Users.findBy(username)
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        //Token
        const token = generateToken(user);
        console.log(token);
        res.status(200).json({
          //Below will give the UserID, then username/type, token
          id: user.id,
          username: username,
          userType: type,
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

function generateToken(user) {
  const payload = {
    subject: user.id, // sub in payload is what the token is about
    username: user.username,
    userType: user.userType
    // ...otherData
  };

  const options = {
    expiresIn: '1d', // show other available options in the library's documentation
  };

  // extract the secret away so it can be required and used where needed
  return jwt.sign(payload, secrets.jwtSecret, options); // this method is synchronous
}

// // host/api/auth/
// router.delete('/:id', async (req, res) => {
//   try {
//     const id = req.params.id;
//     const deleted = await db.removeUser(id);
//     if (deleted.length > 0) {
//       res.status(204);
//     } else {
//       res.status(401).json({ message: "User not found." });
//     }
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// })

module.exports = router;