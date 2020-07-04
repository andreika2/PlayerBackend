import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, IsNotEmpty, Matches } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsEmail()
    readonly email: string;
    readonly avatarUrl: string;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly firstName: string;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly lastName: string;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly gender: string;
    @IsString()
    @IsNotEmpty()
    @Matches(
        /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
        { message: 'Weak password' },
    )
    @ApiProperty()
    readonly password: string;
    readonly role: Array<string>;
}