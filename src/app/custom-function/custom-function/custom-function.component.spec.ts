import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomFunctionComponent} from './custom-function.component';

describe('CustomFunctionComponent', () => {
  let component: CustomFunctionComponent;
  let fixture: ComponentFixture<CustomFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomFunctionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
