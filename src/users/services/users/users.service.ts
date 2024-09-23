import { Injectable } from '@nestjs/common';
import { createUserDto } from 'src/users/dtos/createUser.dto';
class Car{
    private brand:string;
    private speed:number;

    constructor(brand:string,speed:number){
        this.brand=brand;
        this.speed=speed
    }

    public getName =():string=>{
        return `${this.brand}`
    }

    public setBrand = (brand:string):void=>{
        this.brand=brand
    }

    private getGreetings=():string=>{
        return ("getting hands on typescript")
    }

    public greet=():void=>{
        const greetings = this.getGreetings();
        console.log(greetings)
    }

}
const car1 = new Car("bmw",98);
car1.greet()

@Injectable()
export class UsersService {

    private users =[
        {
            userName: "bilal",
            email: "bilal@example.com",
            age: 98
          },
          {
            userName: "ahmed",
            email: "ahmed@example.com",
            age: 87
          }
    ]

    public fetchUser =()=>{
        return this.users
    }

    public createUser =(userDetails:createUserDto)=>{
        this.users.push(userDetails)
    }


}
