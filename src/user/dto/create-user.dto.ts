import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";
export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty()
  firstName: string;
  @IsNotEmpty()
  @ApiProperty()
  lastName: string;
  @IsNotEmpty()
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  @IsNotEmpty()
  birthday: string;
  @ApiProperty()
  @IsNotEmpty()
  nationalIdCard: string;
  @ApiProperty()
  postJob: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  zipCode: string;
  @ApiProperty()
  personalPhoneNumber: string;


 
}
