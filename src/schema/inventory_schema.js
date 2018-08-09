import { gql } from 'apollo-server-express';
import Inventory_modle from '../models/inventory';

export const typeDef = gql`
  type Inventory_item{
    _id:String,
    brand_name:String!,
    version:String!,
    price:Int,
    pic:String,
    description:String
  }
`;

export const resolvers = {
  Query: {
    all_items: async () => {
      const data = await Inventory_modle.find({}, (err, doc) => {
        if (err) return err;
        return doc
      });
      return data;
    }
  },

  Mutation: {
    add_item: async (parent, args) => {
      const item = new Inventory_modle({
        brand_name: args.brand_name,
        version: args.version,
        price: args.price,
        pic: args.pic,
        description: args.description
      });

      return item.save();
    },
  }
}