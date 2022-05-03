import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
      return this.userService.createUser(createUserDto);
    }
    @Get('all')
    async getUser():Promise<User[]>{
      return await this.userService.getAllUser();
    }
    @Delete('/:id')
    deleteUser(@Param('id') id: number): Promise<void> {
      return this.userService.deleteUser(id);
    }
}
