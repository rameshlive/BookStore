import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistnavComponent } from './booklistnav.component';

describe('BooklistnavComponent', () => {
  let component: BooklistnavComponent;
  let fixture: ComponentFixture<BooklistnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooklistnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooklistnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
