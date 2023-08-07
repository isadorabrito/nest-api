import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('v1/customers')
export class CustomerController {
  @Get()
  get() {
    return 'get clients list';
  }
  @Post()
  post() {
    return 'create a new client';
  }
  @Put()
  put() {
    return 'update a client';
  }
  @Delete()
  delete() {
    return 'delete a client';
  }
}
