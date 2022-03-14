import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetnewsfeedComponent } from './getnewsfeed.component';

describe('GetnewsfeedComponent', () => {
  let component: GetnewsfeedComponent;
  let fixture: ComponentFixture<GetnewsfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetnewsfeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetnewsfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
