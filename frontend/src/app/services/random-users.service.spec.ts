import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RandomUsersService } from './random-users.service';

describe('RandomUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientModule
    ],
  }));

  it('should be created', () => {
    const service: RandomUsersService = TestBed.get(RandomUsersService);
    expect(service).toBeTruthy();
  });
});
