import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUsers } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('Users') private readonly usersModel: Model<IUsers>,
  ) {}

  async getUsers() {
    const users = await this.usersModel.find();

    return users;
  }

  async getUser(id: string) {
    const user = await this.usersModel.findById(id);

    return user;
  }

  async getUserWithNotes(id: string) {
    // ödev
    console.log(id);
  }

  async insertUser(payload: CreateUserDto) {
    const createdUser = new this.usersModel(payload);
    const res = await createdUser.save();

    return res.id;
  }

  async updateUser(id: string, payload: UpdateUserDto) {
    const updatedUser = await this.usersModel.findByIdAndUpdate(id, payload, {
      new: true,
    });

    if (!updatedUser) throw new NotFoundException('User not found');

    return updatedUser;
  }

  async deleteUser(id: string) {
    const deletedUser = await this.usersModel.findByIdAndDelete(id);

    return deletedUser;
  }
}
