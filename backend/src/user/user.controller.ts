import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAllUsers() {
    return this.userService.findAll();
  }

  @Get('/:id')
  getOneUser(@Param('id') id: string) {
    return this.userService.findUserById(id);
  }

  @Post()
  async createUser(@Body() userDto: CreateUserDto) {
    try {
      return await this.userService.create(userDto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }

  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(id, updateUserDto);
  }
}
