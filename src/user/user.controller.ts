import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { RecoverUserRequest } from 'src/auth/models/RecoverUser';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @IsPublic()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('data')
  recoverUserData(@Request() req: RecoverUserRequest) {
    return this.userService.getProfile(req.user);
  }
}
