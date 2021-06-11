/*
* Characters are the entities that have relationships and comprise parties
*/

const list = (req, res, next) => {
	res.status(200).json([])
}

const create = (req, res, next) => {
	res.status(200).json({})
}

const view = (req, res, next) => {
	res.status(200).json({})
}

const update = (req, res, next) => {
	res.status(200).json({})
}

const destroy = (req, res, next) => {
	res.status(200).json({})
}

module.exports = { 
	list,
	create,
	view,
	update,
	destroy
}