import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopwearComponent } from './topwear.component';

describe('TopwearComponent', () => {
  let component: TopwearComponent;
  let fixture: ComponentFixture<TopwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
