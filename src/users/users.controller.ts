import {
  Controller,
  Body,
  Post,
  UsePipes,
  ValidationPipe,
  Get,
} from '@nestjs/common';
import { CriarUserDTO } from './dtos/criar-user.dto';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

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
}
