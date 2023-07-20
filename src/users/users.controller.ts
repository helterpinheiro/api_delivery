import {
  Controller,
  Body,
  Post,
  UsePipes,
  ValidationPipe,
  Get,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CriarUserDTO } from './dtos/criar-user.dto';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';

@Controller('api/v1/users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createItem(@Body() criarUserDTO: CriarUserDTO): Promise<User> {
    console.log(criarUserDTO);
    return await this.usersService.createUser(criarUserDTO);
  }

  @Get()
  async listAllUsers(): Promise<Array<User>> {
    return this.usersService.listAllUsers();
  }

  // eslint-disable-next-line prettier/prettier
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
