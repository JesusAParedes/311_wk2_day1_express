
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const { users } = require('./state')

app.use(express.json())

/* BEGIN - create routes here */
app.get('/users', (req, res) => {
  res.json(users);
})

app.get('/users/:id', (req, res) => {
  let humanId = req.params.id;
  users.filter(user => {
    if(user['_id'] == humanId) {
    res.json(user)};
  })
})

app.post('/users', (req, res) => {
  let data = {
    "_id": 7,
    "name": "John Jacob",
    "occupation": "Pumpkin Hunter",
    "avatar": "http://vignette4.wikia.nocookie.net/deadliestfiction/images/d/de/Spike_Spiegel_by_aleztron.jpg/revision/latest?cb=20130920231337"
  };

  res.json(users.push(data));
})

// app.put('/users/1', (req, res) => {
//   res.json(users)
// })

/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))