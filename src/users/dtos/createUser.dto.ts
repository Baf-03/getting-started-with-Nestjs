import {IsEmail, IsNotEmpty, IsNumber } from "class-validator";


export class createUserDto{
    @IsNotEmpty()
    userName:string;

    @IsEmail()
    @IsNotEmpty()
    email:string;


    @IsNumber()
    age:number;
}