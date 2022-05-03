import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendEmail(user: CreateUserDto): Promise<string>  {
   
    const emailSent = await this.mailerService.sendMail({
      to: user.email,
      subject: 'send Email and password',
      template: 'confirmation', // `.hbs` extension is appended automatically
      context: { // ✏️ filling curly brackets with content
        email: user.email,
        password:user.password,
      
      },
    });
    return 'email sent'
  }
}
