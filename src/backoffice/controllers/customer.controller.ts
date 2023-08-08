import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseInterceptors,
} from '@nestjs/common';
import { Customer } from '../models/customer.model';
import { Result } from '../models/result.model';
import { ValidatorInterceptor } from 'src/interceptors/validator.interceptor';
import { CreateCustomerContract } from '../contracts/customer.contracts';

@Controller('v1/customers')
export class CustomerController {
  @Get()
  get() {
    return new Result(null, true, [], null);
  }

  @Get(':id')
  getBtId(@Param('id') id: string) {
    return new Result(null, true, {}, null);
  }

  @Post()
  @UseInterceptors(new ValidatorInterceptor(new CreateCustomerContract()))
  post(@Body() body: Customer) {
    return new Result('client created!', true, body, null);
  }
  @Put(':id')
  put(@Param('id') id, @Body() body) {
    return new Result('client updated!', true, body, null);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return new Result('client deleted!', true, null, null);
  }
}
