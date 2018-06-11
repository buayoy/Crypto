import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhattomineComponent } from './whattomine.component';

describe('WhattomineComponent', () => {
  let component: WhattomineComponent;
  let fixture: ComponentFixture<WhattomineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhattomineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhattomineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
