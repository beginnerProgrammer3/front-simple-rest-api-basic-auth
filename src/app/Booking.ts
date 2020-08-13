import { Customer } from './Customer';
import { Car } from './Car';

export class Booking {
  public id: number;
  public Customer: Customer;
  public pickupDate: string;
  public dropDate: string;
  public Car: Car;
  constructor() {
  }
}
