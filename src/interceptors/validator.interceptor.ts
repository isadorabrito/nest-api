import {
  NestInterceptor,
  Injectable,
  ExecutionContext,
  CallHandler,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Contract } from 'src/backoffice/contracts/contract';
import { Result } from 'src/backoffice/models/result.model';

@Injectable()
export class ValidatorInterceptor implements NestInterceptor {
  constructor(public contract: Contract) {}
  intercept(
    context: ExecutionContext,
    call$: CallHandler<any>,
  ): Observable<any> {
    const body = context.switchToHttp().getRequest().body;
    const valid = this.contract.validate(body);

    if (!valid) {
      throw new HttpException(
        new Result(
          'oops, something went wrong',
          false,
          null,
          this.contract.errors,
        ),
        HttpStatus.BAD_REQUEST,
      );
    }

    return call$.handle();
  }
}
