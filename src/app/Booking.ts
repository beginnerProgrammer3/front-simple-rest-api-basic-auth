import { Customer } from './Customer';
import { Car } from './Car';

export class Booking {
  public id: number;
  public Customer: Customer;
  public pickupDate: Date;
  public dropDate: Date;
  public Car: Car;
  constructor() {
  }
}
