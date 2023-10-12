import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: any): Promise<User> {
    return this.userModel.create(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findUserById(id: string): Promise<any> {
    return this.userModel.findById(id).exec();
  }

  async deleteUser(id: string): Promise<any> {
    return this.userModel.findByIdAndRemove(id).exec();
  }

  async updateUser(id: string, updateUserDto: any): Promise<User> {
    return this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
  }
}
