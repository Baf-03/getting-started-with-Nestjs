import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class userPracticeDto{
    @IsNotEmpty()
    @IsString()
    userName:string;

    @IsNotEmpty()
    @IsNumber()
    age:number;

    @IsNotEmpty()
    @IsEmail()
    email:string;
}