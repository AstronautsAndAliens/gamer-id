import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSteam2Component } from './test-steam2.component';

describe('TestSteam2Component', () => {
  let component: TestSteam2Component;
  let fixture: ComponentFixture<TestSteam2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSteam2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSteam2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
