import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express'
import bodyParser from 'body-parser';
import session from 'express-session';
import cors from 'cors'
import path from 'path';
import passport from 'passport';
import pass_jwt from './auth';
import jwt from 'jsonwebtoken';

import mongoose from 'mongoose';
import { merge } from 'lodash';
import { typeDef as User, resolvers as User_resolvers } from './schema/user_schema';
import { typeDef as Inventory_item, resolvers as Inventory_item_resolvers } from './schema/inventory_schema';
import { typeDef as Order, resolvers as Order_resolvers } from './schema/order_schema';
import User_modal from './models/user';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/', { useNewUrlParser: true, dbName: 'arronTai' });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.info('mongodb is connected!!');
});

// app
const app = new express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

pass_jwt(passport);

// authentication
app.use(passport.initialize());
app.use(passport.session());

// Apollo graphql =======================================================
const Query = gql`
  type Query{
  #user query
    find_user(email:String!):User,
    all_users:[User],
 
  #inventory_item query 
    all_items:[Inventory_item]

  #order query
    all_orders:[Order]
  }
`;

const Mutation = gql`
#user mutation
  type Mutation{
    add_user(
      user_name:String!,
      user_email:String!,
      password:String!,
      user_avatar:String,
      online:Boolean,
      description:String
    ): User,

#inventory_item mutation
    add_item( 
      brand_name:String!,
      version:String!,
      price:Int,
      pic:String,
      description:String
    ):Inventory_item,

#order mutation
    add_order(
      order_name:String!,
      user_email:String!,
      address:String!,
    ): Order,
  }
`

const check = (token) => {
  jwt.verify(token, 'secret', function (err, decoded) {
    if (decoded) {
      console.log(decoded.user_email)
      User_modal.findOne({ user_email: decoded.user_email }, (err, user) => {
        console.log('yser  ', user)
        return user

      })
    }
  });
}

const server = new ApolloServer({
  typeDefs: [Query, Mutation, User, Inventory_item, Order],
  resolvers: merge(User_resolvers, Inventory_item_resolvers, Order_resolvers),
  context: async ({ req, res }) => {

    if (!req.headers.authorization) {
      return { token: null }
    } else {
      let bearer = req.headers.authorization;
      let token = bearer.split(' ')[1];

      const a = await jwt.verify(token, 'secret', function (err, decoded) {
        if (err) throw err
        return decoded
      });
      const user = await User_modal.findOne({ user_email: a.user.user_email }, (err, user) => {
        if (err) throw err

        return user;
      })
      return {
        user: user,
        token: token
      }
    }
  }
});


// route====================================

app.post('/login', (req, res, next) => {
  const user_email = req.body.user_email;
  const password = req.body.password;
  // console.log(user_email,password)

  User_modal.findOne({ user_email }, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: 'User not found' });
    }

    if (password == user.password) {
      jwt.sign({ user }, 'secret', (err, token) => {
        if (err) throw err;
        res.json({
          token,
          user
        });
      });
    }
  });
});

// app.get('/test', passport.authenticate('jwt', { session: false }), (req, res, next) => {
//   //console.log(req)
//   res.json({
//     user: req.user,
//     message: "pass man~",
//     info: req.authInfo.msg
//   })
// })



server.applyMiddleware({ app });
app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
);