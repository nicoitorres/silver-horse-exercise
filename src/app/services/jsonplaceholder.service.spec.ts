import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { JsonplaceholderService } from './jsonplaceholder.service';
import { Observable } from 'rxjs';
import { User } from '../support/User';
import { Coordinates } from '../support/Coordinates';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('JsonplaceholderService', () => {
 

  let service: JsonplaceholderService;
 
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
      imports:  [HttpClientTestingModule, RouterTestingModule
      ],
      providers: [JsonplaceholderService]
    });
    service = TestBed.inject(JsonplaceholderService);
  });
  
  it('should be created', () => {
    const service: JsonplaceholderService = TestBed.get(JsonplaceholderService);

    expect(service).toBeTruthy();
  });
  it('should check the return value of getting a valid user', () => {
    service.getUser(1).subscribe(result => {
      expect(result).toBe(user1dto);
    })
  });
});
