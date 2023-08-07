import { Controller } from '@nestjs/common';

@Controller()
export class CustomerController {
  get() {
    return 'Clients list';
  }
}
