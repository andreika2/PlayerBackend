export class CreateUserDto {
    readonly email: string;
    readonly avatarUrl: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly gender: string;
    readonly password: string;
    readonly role: Array<string>;
}