import { Injectable, Logger } from '@nestjs/common';
import { CriarUserDTO } from './dtos/criar-user.dto';
import { User } from './interfaces/user.interface';
import { v4 as uuidv4 } from 'uuid';
import { timeStamp } from 'console';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  private readonly logger = new Logger(UsersService.name);

  async createUser(criarUserDTO: CriarUserDTO): Promise<User> {
    const createdUser = new this.userModel(criarUserDTO);
    console.log(createdUser);
    return await createdUser.save();
  }

  async listAllUsers(): Promise<Array<User>> {
    return await this.userModel.find().populate('type_user').exec();
  }
}
