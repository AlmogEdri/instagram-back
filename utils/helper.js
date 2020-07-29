const { response } = require('express');
const User = require('../models').user;

/**
 * Find user by object such as { id } || { email }
 * 
 * @param {object} object
 * @return {User}
 */
const findUserByObject = async (object) => await User.findOne({ where: object });

/**
 * Build a response with status and massage
 * 
 * @param {number} status 
 * @param {Response} res // TODO: bind this to the calling scope so that we don't need this
 * @param {string} message // optional
 * @return {Response} 
 */
const statusAndMessage = (status, res, message = '') => res.status(status).send({ message });

module.exports = {
	findUserByObject,
	statusAndMessage
}