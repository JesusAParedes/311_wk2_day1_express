
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const { users } = require('./state')

app.use(express.json())

/* BEGIN - create routes here */

app.get('/users', (req, res) => res.json(users))

app.get('/users/:userId', (req, res) => {
  res.json(users.filter(user => user._id === parseInt(req.params.userId)))
  })


app.post('/users', (req, res) => {
  const newUser = {
    _id: users[users.length - 1]._id + 1,
    "name": req.body.name,
    "occupation": req.body.occupation,
    "avatar": req.body.avatar
  }
  users.push(newUser);
  return res.json(newUser);
})

app.put('/users/:userId', (req, res) => {
  const updateUser = req.body;
  users.forEach(user => {
    if(user._id === parseInt(req.params.userId)) {
      user.name = updateUser.name ? updateUser.name : updateUser.name,
      user.occupation = updateUser.occupation ? updateUser.occupation : updateUser.occupation
      // user.avatar = updateUser.avatar ? updateUser.avatar : updateUser.avatar;
      return res.json(user);
    }
  })
})

app.delete('/users/:userId', (req, res) => {
  res.json(
    { Message: 'User deleted',
    users: users.filter(user => {
    if(user._id !== parseInt(req.params.userId)) {
       return user;
    }
    if(user._id === parseInt(req.params.userId)) {
       user.isActive = false;
    }})})})
/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))