import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MailService } from "src/mail/mail.service";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./user.entity";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: Repository<User>,
    private mailService: MailService
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<string> {
    try {
      const user = {
        ...createUserDto,
        password: Math.random().toString(36).slice(-8),
      };

      const created = this.userRepository.create(user);
      await this.userRepository.save(created);
      await this.mailService.sendEmail(user);

      return "user created";
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
