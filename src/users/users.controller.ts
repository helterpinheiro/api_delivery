import {
  Controller,
  Body,
  Post,
  UsePipes,
  ValidationPipe,
  Get,
  Request,
  UseGuards,
  Param,
} from '@nestjs/common';
import { CriarUserDTO } from './dtos/criar-user.dto';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt.auth-guard';
import { ValidacaoParametroPipe } from 'src/common/pipes/validacao-parametros.pipe';
import { AtualizarUserDTO } from './dtos/atualizar-user.dto';
import { DeleteUserDTO } from './dtos/delete-user.dto';

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

  @UseGuards(JwtAuthGuard)
  @Get()
  async listAllUsers(): Promise<Array<User>> {
    return this.usersService.listAllUsers();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:_id')
  async listUserForId(
    @Param('_id', ValidacaoParametroPipe) _id: string,
  ): Promise<User> {
    return this.usersService.listUserForId(_id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:_id')
  async updateUser(
    @Body() atualizarUserDTO: AtualizarUserDTO,
    @Param('_id', ValidacaoParametroPipe) _id: string,
  ): Promise<User> {
    return this.usersService.updateUser(_id, atualizarUserDTO);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:_id')
  async deleteUser(
    @Body() deleteUserDTO: DeleteUserDTO,
    @Param('_id', ValidacaoParametroPipe) _id: string,
  ): Promise<User> {
    return this.usersService.delteUser(_id, deleteUserDTO);
  }
  // eslint-disable-next-line prettier/prettier
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
