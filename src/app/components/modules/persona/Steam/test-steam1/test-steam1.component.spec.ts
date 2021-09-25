import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSteam1Component } from './test-steam1.component';

describe('TestSteam1Component', () => {
  let component: TestSteam1Component;
  let fixture: ComponentFixture<TestSteam1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSteam1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSteam1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
