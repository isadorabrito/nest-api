import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

@Controller('v1/customers')
export class CustomerController {
  @Get()
  get() {
    return 'get clients list';
  }

  @Get(':id')
  getBtId(@Param('id') id) {
    return 'get clients list' + id;
  }

  @Post()
  post(@Body() body) {
    return body;
  }
  @Put(':id')
  put(@Param('id') id, @Body() body) {
    return { customer: id, data: body };
  }
  @Delete(':id')
  delete(@Param('id') id) {
    return 'client ' + id + ' deleted';
  }
}
