// eslint-disable-next-line no-unused-expressions
require("dotenv").config
const faunadb = require('faunadb')
const query = faunadb.query

const createClient = () => {
    if (!process.env.FAUNA_ADMIN_KEY) {
        throw new Error("FAUNA_ADMIN_KEY not found")
    }
    const client = new faunadb.Client({
        secret: process.env.FAUNA_ADMIN_KEY
    })
    return client
}

exports.client = createClient()
exports.query = query