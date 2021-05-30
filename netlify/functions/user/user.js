// with thanks to https://github.com/vnovick/netlify-function-example/blob/master/functions/bad-words.js
// import axios from 'axios'
// const Filter = require('bad-words')

// const filter = new Filter()
// const hgeEndpoint = 'https://live-coding-netlify.herokuapp.com'
const process = require('process')
const axios = require('axios')

// const headers = {
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Headers': 'Content-Type',
//   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
// }

const query = `
{
  users {
    firstname
    lastname
    email
    discussions {
      id
      created_at
      comments {
        id
      }
      title
      text
    }
  }
}
`

// console.log('attempt')
// console.log(process.env.HASURA_ADMIN_SECRET)

const handler = async (_event) => {
  // let request
  // try {
  //   request = JSON.parse(event.body)
  // } catch (error) {
  //   return { statusCode: 400, body: 'c annot parse hasura event' }
  // }

  // const variables = {
  //   id: request.event.data.new.id,
  //   title: filter.clean(request.event.data.new.title),
  //   content: filter.clean(request.event.data.new.content),
  // }
  try {
    await axios
      .post(`https://bookclub.hasura.app/v1/graphql`, JSON.stringify({ query }), { headers: { 'Content-Type': 'application/json', 'x-hasura-admin-secret': `${process.env.HASURA_ADMIN_SECRET}` } })
      .then(data => data.json()).then(r => console.log(r))
    return {
      // headers,
      statusCode: 200,
      body: 'success',
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
