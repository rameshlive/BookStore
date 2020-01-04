import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforDirtComponent } from './ngfor-dirt.component';

describe('NgforDirtComponent', () => {
  let component: NgforDirtComponent;
  let fixture: ComponentFixture<NgforDirtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgforDirtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforDirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
