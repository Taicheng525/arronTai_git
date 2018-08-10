import { gql, AuthenticationError } from 'apollo-server-express';
import User_modle from '../models/user';
import { typeDef as Order, resolvers as Order_resolvers } from './order_schema';
import Order_model from '../models/order';

export const typeDef = gql`
  type User {
    _id:String,
    user_name:String!,
    user_email:String!,
    created_user_time:String!,
    user_admin:Boolean!,
    password:String!,
    user_avatar:String,
    online:Boolean,
    description:String,
    orders:[Order]
  } 
`;

export const resolvers = {
  Query: {
    find_user: async (parent, args) => {
      const data = await User_modle.findOne({ user_email: args.email }, (err, doc) => {
        if (err) return (err);
        return doc
      });

      return data;
    },

    all_users: async (parent, args, context) => {
      console.log('context: ', context)
      if (!context.user) {
        throw new AuthenticationError("Can't find your user or user is null!");
      }
      const data = await User_modle.find({}, (err, doc) => {
        if (err) return err;
        return doc;
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

  User: {
    orders: async parent => {
      console.log(parent.user_email);
      const data = await Order_model.find({ user_email: parent.user_email }, (err, doc) => {
        if (err) return err;
        return doc;
      });

      return data;
    }
  }
};


