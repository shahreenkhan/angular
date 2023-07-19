import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeameditComponent } from './teamedit.component';

describe('TeameditComponent', () => {
  let component: TeameditComponent;
  let fixture: ComponentFixture<TeameditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeameditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeameditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
