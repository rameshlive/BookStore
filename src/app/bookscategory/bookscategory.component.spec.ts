import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookscategoryComponent } from './bookscategory.component';

describe('BookscategoryComponent', () => {
  let component: BookscategoryComponent;
  let fixture: ComponentFixture<BookscategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookscategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookscategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
