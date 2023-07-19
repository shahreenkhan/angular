import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsapiComponent } from './newsapi.component';

describe('NewsapiComponent', () => {
  let component: NewsapiComponent;
  let fixture: ComponentFixture<NewsapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
