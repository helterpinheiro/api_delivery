import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CriarUserDTO } from './dtos/criar-user.dto';
import { User } from './interfaces/user.interface';
import { v4 as uuidv4 } from 'uuid';
import { timeStamp } from 'console';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { hash } from 'bcrypt';
import { UserSessionDTO } from './dtos/user-session.dto';
import { AtualizarUserDTO } from './dtos/atualizar-user.dto';
import { DeleteUserDTO } from './dtos/delete-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  private readonly logger = new Logger(UsersService.name);

  async createUser(criarUserDTO: CriarUserDTO): Promise<User> {
    const { email, password } = criarUserDTO;
    const userEncontrado = await this.userModel.findOne({ email }).exec();

    if (userEncontrado) {
      throw new BadRequestException(
        `User with email ${email} already registred`,
      );
    }
    const passwordHash = await hash(password, 8);
    criarUserDTO.password = passwordHash;

    const createdUser = new this.userModel(criarUserDTO);
    console.log(createdUser);
    return await createdUser.save();
  }

  async listAllUsers(): Promise<Array<User>> {
    return await this.userModel.find().populate('type_user').exec();
  }

  async listUserForId(_id: any): Promise<User> {
    const user = await this.userModel.findOne({ _id }).exec();
    if (!user) {
      throw new NotFoundException(`User with id ${_id} not found!`);
    }

    return user;
  }

  async updateUser(
    _id: any,
    atualizarUserDTO: AtualizarUserDTO,
  ): Promise<User> {
    const user = await this.userModel.findOne({ _id }).exec();
    if (!user) {
      throw new NotFoundException(`User with id ${_id} not found!`);
    }

    return await this.userModel
      .findOneAndUpdate({ _id }, { $set: atualizarUserDTO })
      .exec();
  }

  async delteUser(_id: any, deleteUserDTO: DeleteUserDTO): Promise<User> {
    const user = await this.userModel.findOne({ _id }).exec();
    if (!user) {
      throw new NotFoundException(`User with id ${_id} is not registred`);
    }

    return await this.userModel
      .findOneAndUpdate({ _id }, { $set: deleteUserDTO })
      .exec();
  }

  async session(email: string): Promise<UserSessionDTO> {
    const user = this.userModel.findOne({ email }).exec();
    return user;
  }
}
