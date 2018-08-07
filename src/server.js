import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express'
import bodyParser from 'body-parser';
import session from 'express-session';
import cors from 'cors'
import path from 'path';
// import Koa from 'koa';
// import route from 'koa-route';
// import session from 'koa-session2';
// import bodyParser from 'koa-bodyparser';
import passport from 'passport';
// import './auth.js';
// import cors from 'koa2-cors';

import mongoose from 'mongoose';
import { merge } from 'lodash';
// import { ApolloServer, gql } from 'apollo-server-koa';
import { typeDef as User, resolvers as User_resolvers } from './schema/user_schema';
import { typeDef as Inventory_item, resolvers as Inventory_item_resolvers } from './schema/inventory_schema';
import { typeDef as Order, resolvers as Order_resolvers } from './schema/order_schema';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/', { useNewUrlParser: true, dbName: 'arronTai' });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.info('mongodb is connected!!');
});

const LocalStrategy = require('passport-local').Strategy;;
const User_modal = require('./models/user');

passport.use(new LocalStrategy(
  function (username, password, done) {
    let query = { user_email: username };
    User_modal.findOne(query, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false, { message: 'No user found' }); }
      if (user.password != password) { return done(null, false); }
      //console.log(user)
      return done(null, user);
    });
  }));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User_modal.findById(id, function (err, user) {
    // if (err) { return done(err); }
    done(null, user);
  });
});

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

const server = new ApolloServer({
  typeDefs: [Query, Mutation, User, Inventory_item, Order],
  resolvers: merge(User_resolvers, Inventory_item_resolvers, Order_resolvers)
});

// app
const app = new express();
const port = process.env.PORT || 4000;
server.applyMiddleware({ app });

// cors
app.use(cors());

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// sessions
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

// authentication
app.use(passport.initialize());
app.use(passport.session());

// route====================================
// User_modal.findOne({user_email:"321@qq.com"}, function (err, user) {
//   console.log(user);
// })


// app.post('/login_auth',
//   passport.authenticate('local', {
//   }))

app.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (user) {
      console.log(user)
      return res.send(user)
    }
  })(req, res, next)
}
);

// app.use(function (ctx, next) {
//   if (ctx.isAuthenticated()) {
//     console.log('good')
//     return next()
//   } else {
//     console.log('not good')
//   }
// })

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
);