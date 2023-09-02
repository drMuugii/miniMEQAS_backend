import { Injectable } from '@nestjs/common';

@Injectable()
export class ResultService {
  getHello(): string {
    return 'Hello Muuguu!';
  }
}
