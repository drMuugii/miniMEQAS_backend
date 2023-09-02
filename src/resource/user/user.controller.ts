import { Controller, Get } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}
  @Get()
  getUser(): any {
    return this.UserService.getUser();
  }
}
