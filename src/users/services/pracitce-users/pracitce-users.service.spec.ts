import { Test, TestingModule } from '@nestjs/testing';
import { PracitceUsersService } from './pracitce-users.service';

describe('PracitceUsersService', () => {
  let service: PracitceUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PracitceUsersService],
    }).compile();

    service = module.get<PracitceUsersService>(PracitceUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
