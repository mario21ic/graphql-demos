const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`

  type Query {
    hello: String
  }

`
const resolvers = {
  Query: {
    hello: () => {
      return `From port ${process.env.PORT}`
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen( {port:process.env.PORT} ).then(({url}) => {
  console.log(`Servidor iniciado en ${url}`)
})

//console.log(`hello moto ${process.env.PORT}`)
