import { TestBed, getTestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('UsersService', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;
  let injector: TestBed;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule]

    }).compileComponents();
    injector = getTestBed();
    service = TestBed.inject(UsersService);
    httpMock = injector.get(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all users on creation', async () => {
    spyOn(service, 'getAllUsers').and.callThrough();
    service.allUsers.subscribe(resp=>{
      expect(resp).not.toBe(null); //make sure the all users array has been initialised
    })
  });

});
