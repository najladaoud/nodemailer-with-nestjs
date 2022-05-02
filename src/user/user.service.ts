import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(
          @InjectRepository(UserRepository)
          private userRepository:Repository<User>
         ) {}

         async createUser(createUserDto: CreateUserDto): Promise<User> {
            try {
              const created = this.userRepository.create(createUserDto);
              await this.userRepository.save(created);
              return created
            } catch (error) {
              return error;
            }
          }
          getAllUser(): Promise<User[]> {
            try {
              return this.userRepository.find();
            } catch (error) {
              return error;
            }
          }
          async deleteUser(id: number): Promise<void> {
            const result = await this.userRepository.delete(id);
            if (result.affected === 0) {
              throw new NotFoundException(`user with ID"${id}" not found`);
            }
          }
}
