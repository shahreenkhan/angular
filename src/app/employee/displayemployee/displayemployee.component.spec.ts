import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayemployeeComponent } from './displayemployee.component';

describe('DisplayemployeeComponent', () => {
  let component: DisplayemployeeComponent;
  let fixture: ComponentFixture<DisplayemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayemployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
