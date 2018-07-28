import Koa from 'koa';
import mongoose from 'mongoose';
import { merge } from 'lodash';
import { ApolloServer, gql } from 'apollo-server-koa';
import { typeDef as User, resolvers as User_resolvers } from './schema/user_schema';
import { typeDef as Inventory_item, resolvers as Inventory_item_resolvers } from './schema/inventory_schema';
import { typeDef as Order, resolvers as Order_resolvers } from './schema/order_schema';

mongoose.connect('mongodb://127.0.0.1:27017/', { useNewUrlParser: true, dbName: 'arronTai' });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.info('mongodb is connected!!');
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

const app = new Koa();
const port = process.env.PORT || 4000;
server.applyMiddleware({ app });

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
);