import { Injectable } from '@nestjs/common';
import { userPracticeDto } from 'src/users/dtos/userPractice.dto';

@Injectable()
export class PracitceUsersService {
    private users =[
        {
            userName:"bilal",
            email:"b@gmail.com",
            age:21
        },
        {
            userName:"XD",
            email:"xd@gmail.com",
            age:11
        },
    ]

    public fetchUsers(){
        return this.users
    }
    
    public createUser(userData:userPracticeDto){
        return this.users.push(userData)
    }
    
}
