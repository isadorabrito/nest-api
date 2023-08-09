import { Flunt } from 'src/utils/flunt';
import { Contract } from './contract';
import { Customer } from '../models/customer.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateCustomerContract implements Contract {
  errors: any[];
  validate(model: Customer): boolean {
    const flunt = new Flunt();

    flunt.hasMinLen(model.name, 5, 'Invalid name!');
    flunt.isEmail(model.email, 'Invalid mail!');
    flunt.isFixedLen(model.document, 11, 'Invalid CPF!');

    this.errors = flunt.errors;
    return flunt.isValid();
  }
}
