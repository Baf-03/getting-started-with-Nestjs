// import { Body, Controller, Param, ParseBoolPipe, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
// import { createUserDto } from 'src/users/dtos/createUser.dto';
// import { UsersService } from 'src/users/services/users/users.service';

import { Body, Controller, Param, ParseBoolPipe, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { userPracticeDto } from "src/users/dtos/userPractice.dto";
import { PracitceUsersService } from "src/users/services/pracitce-users/pracitce-users.service";


// @Controller('users')
// export class UsersController {
//   constructor (private readonly usersService:UsersService){}

//   @Post(':id')
//   @UsePipes(new ValidationPipe())
//   createUser(
//     @Query('status', ParseBoolPipe) status: boolean,      
//     @Param('id', ParseIntPipe) id: number,              
//     @Body() userData: createUserDto      
//   ) {
//     console.log(this.usersService.fetchUser());
//     this.usersService.createUser(userData);
//     return {
//       message: `User with ID ${id} created with status ${status}`,
//       user: this.usersService.fetchUser(),
//     };
//   }
// }

@Controller("users")
export class UsersController{
  constructor(private readonly usersPracticeService:PracitceUsersService){}
  @Post(":id")
  @UsePipes(new ValidationPipe())
  createUser(
    @Param("id",ParseIntPipe) id:number,
    @Query("status",ParseBoolPipe) status:boolean,
    @Body() userData:userPracticeDto
  ){
    //now it is time to use services 
    //for examole ap ko db mae user create krna hae ab zarrorat parae ge ap ko services ke kion services mae hum eisa kaam krtae
    this.usersPracticeService.createUser(userData)
    
    return {
      param:id,
      query:status,
      body:this.usersPracticeService.fetchUsers()
    }
  }
}