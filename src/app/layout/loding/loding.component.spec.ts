import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LodingComponent } from './loding.component';

describe('LodingComponent', () => {
  let component: LodingComponent;
  let fixture: ComponentFixture<LodingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LodingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
