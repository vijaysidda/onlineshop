import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomwearComponent } from './bottomwear.component';

describe('BottomwearComponent', () => {
  let component: BottomwearComponent;
  let fixture: ComponentFixture<BottomwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
