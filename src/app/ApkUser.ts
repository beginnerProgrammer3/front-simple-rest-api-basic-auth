import {Customer} from './Customer';

export class ApkUser {
  public id: number;
  public username: string;
  public email: string;
  public password: string;
  public role: string;
  public isEnabled: boolean;
  public customer: Customer;
  constructor() {
    this.isEnabled = false;
    this.role = 'USER';
    this.customer = new Customer();
  }
}
