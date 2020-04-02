import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { JsonplaceholderService } from './jsonplaceholder.service';
import { Observable } from 'rxjs';
import { User } from '../support/User';
import { Coordinates } from '../support/Coordinates';
import { HttpClient, HttpEventType, HttpEvent, HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('JsonplaceholderService', () => {


  let service: JsonplaceholderService;
  let injector: TestBed;

  let httpMock: HttpTestingController;
  let user1dto: User = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo:
      {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule],
      providers: [JsonplaceholderService]
    });
    injector = getTestBed();
    service = TestBed.inject(JsonplaceholderService);
    httpMock = injector.get(HttpTestingController);
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;

  });
  afterEach(() => {
    httpMock.verify();
  })
  it('should be created', () => {
    const service: JsonplaceholderService = TestBed.get(JsonplaceholderService);

    expect(service).toBeTruthy();
  });


  it('should return an Observable<User>', (done:DoneFn) => {
    service.getUser(1).subscribe(users => {
      expect(users).toEqual(user1dto);
      done();
    });
    const req = httpMock.expectOne(`${service.apiUrl}users/1`);
    expect(req.request.method).toBe("GET");
    req.flush(user1dto);
  });



});
