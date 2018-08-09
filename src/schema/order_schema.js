import { gql } from 'apollo-server-express';
import Order_modle from '../models/order';

export const typeDef = gql`
  type Order{
    _id:String,
    order_name:String!,
    user_email:String!,
    address:String!,
    created_order_time:String,
    end_time:String,
    order_number:Int,
    in_process:Boolean,
    total_price:Int,
    cpu:String,
    mother_board:String,
    power:String,
    video_card:String,
    case:String,
    wifi_adapter:String,
    cpu_cooler:String,
    hard_drive:String,
    memory:String,
    fan:String
  }
`;

export const resolvers = {
  Query: {
    all_orders: async () => {
      const data = await Order_modle.find({}, (err, doc) => {
        if (err) return err;
        return doc;
      });

      return data;
    }
  },

  Mutation: {
    add_order: async (parent, args) => {
      const order = new Order_modle({
        order_name: args.order_name,
        user_email: args.user_email,
        address: args.address,
        created_order_time: args.created_order_time,
        end_time: args.end_time,
        order_number: args.order_number,
        in_process: args.in_process,
        total_price: args.total_price,
        cpu: args.cpu,
        mother_board: args.mother_board,
        power: args.power,
        video_card: args.video_card,
        case: args.case,
        wifi_adapter: args.wifi_adapter,
        cpu_cooler: args.cpu_cooler,
        hard_drive: args.hard_drive,
        memory: args.memory,
        fan: args.fan
      });

      return order.save();
    }
  }
}