const { ApolloServer, UserInputError } = require('apollo-server');
// const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')

// require('dotenv').config()
const Query = require('./Query')
const Mutation = require('./Mutation')


// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
//   })
//   .then(console.log('MongoDB connected...'))
//   .catch(error => console.error('MongoDB disconnected...', error))

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8'), // schema.graphql
  resolvers: { Query, Mutation }
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
