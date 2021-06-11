const express = require('express')

const app = express()
const port = 3000

const users = require('./controllers/users.js')
const characters = require('./controllers/characters.js')
const relationships = require('./controllers/relationships.js')
const parties = require('./controllers/parties.js')
const quests = require('./controllers/quests.js')


app.get('/',  function (req, res) {
  res.send('it is lit')
})

app.route('/v0/users')
	.get(users.list)
	.post(users.create)

app.route('/v0/users/:userId')
	.get(users.view)
	.put(users.update)
	.delete(users.destroy)

app.route('/v0/users/:userId/characters')
	.get(characters.list)
	.post(characters.create)

app.route('/v0/users/:userId/characters/:characterId')
	.get(characters.view)
	.put(characters.update)
	.delete(characters.destroy)

app.route('/v0/users/:userId/relationships')
	.get(relationships.list)
	.post(relationships.create)

app.route('/v0/users/:userId/relationships/:relationshipId')
	.get(relationships.view)
	.put(relationships.update)
	.delete(relationships.destroy)

app.route('/v0/users/:userId/parties')
	.get(parties.list)
	.post(parties.create)

app.route('/v0/users/:userId/parties/:partyId')
	.get(parties.view)
	.put(parties.update)
	.delete(parties.destroy)

app.route('/v0/users/:userId/quests')
	.get(quests.list)
	.post(quests.create)

app.route('/v0/users/:userId/quests/:questId')
	.get(quests.view)
	.put(quests.update)
	.delete(quests.destroy)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})