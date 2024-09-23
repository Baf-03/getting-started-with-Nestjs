import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { PracitceUsersService } from './services/pracitce-users/pracitce-users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PracitceUsersService]
})
export class UsersModule {}
