import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Customer } from '../models/customer.model';
import { Result } from '../models/result.model';

@Controller('v1/customers')
export class CustomerController {
  @Get()
  get() {
    return new Result(null, true, [], null);
  }

  @Get(':id')
  getBtId(@Param('id') id) {
    return new Result(null, true, {}, null);
  }

  @Post()
  post(@Body() body: Customer) {
    return new Result('client created!', true, body, null);
  }
  @Put(':id')
  put(@Param('id') id, @Body() body) {
    return new Result('client updated!', true, body, null);
  }
  @Delete(':id')
  delete(@Param('id') id) {
    return new Result('client deleted!', true, null, null);
  }
}
