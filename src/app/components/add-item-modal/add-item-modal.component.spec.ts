import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemModalComponent } from './add-item-modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddItemModalComponent', () => {
  let component: AddItemModalComponent;
  let fixture: ComponentFixture<AddItemModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserDynamicTestingModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [AddItemModalComponent],
      providers: [NgbActiveModal]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(AddItemModalComponent);
        component = fixture.componentInstance;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a post',async () => {
    spyOn(component, 'addItem');

    let button = fixture.debugElement.nativeElement.querySelector('#addItemBtn');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.addItem).toHaveBeenCalled();
      expect(component.loading).toBe(false); //Should have set loading to false after finished
    });
  });
});
