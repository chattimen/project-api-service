import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import axios from 'axios';
import { Order } from '../order/order.model';
import { Product } from '../product/product.model';

@Resolver()
export class QueryResolver {
  @Query(() => [Product])
  async products(): Promise<Product[]> {
    const { data } = await axios.get('http://localhost:3001/products');
    return data;
  }

  @Query(() => [Order])
  async orders(): Promise<Order[]> {
    const { data } = await axios.get('http://localhost:3002/orders');
    return data;
  }

  @Query(() => Order, { nullable: true })
  async orderById(@Args('id', { type: () => ID }) id: string): Promise<Order> {
    const { data } = await axios.get(`http://localhost:3002/orders/${id}`);
    return data;
  }
}
