const Koa = require('koa');
const mongoose = require('mongoose');
const User_modle = require('./models/user');
const { ApolloServer, gql } = require('apollo-server-koa');

mongoose.connect('mongodb://127.0.0.1:27017/', { useNewUrlParser: true, dbName: 'arronTai' });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.info('mongodb is connected!!');
});

//-------------------------------------------------graphql apollo schema

const typeDefs = gql`
  type User {
    _id:String,
    user_name:String!,
    user_email:String!,
    created_user_time:String!,
    user_admin:Boolean!,
    password:String!,
    user_avatar:String,
    online:Boolean,
    description:String
  } 

  type Query {
    find_user(email:String!):User,
  }

  type Mutation {
    add_user(
      user_name:String!,
      user_email:String!,
      password:String!,
      user_avatar:String,
      online:Boolean,
      description:String
    ): User
  }
`;

//------------------------------------------------- resolvers

const resolvers = {
  Query: {
    find_user: async (parent, args) => {
      const data = await User_modle.findOne({ user_email: args.email }, (err, doc) => {
        if (err) return console.error(err);
        return doc
      });

      return data;
    }
  },

  Mutation: {
    add_user: (parent, args) => {
      //console.log(typeof (args), args);
      const user = new User_modle({
        user_name: args.user_name,
        user_email: args.user_email,
        password: args.password,
        user_avatar: args.user_avatar,
        description: args.description
      });
      return user.save();
    },
  },
};

//-------------------------------------------------graphql apollo schema

const server = new ApolloServer({ typeDefs, resolvers });

const app = new Koa();
const port = process.env.PORT || 4000;
server.applyMiddleware({ app });

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
);