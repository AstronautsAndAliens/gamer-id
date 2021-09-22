import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBlizzard2Component } from './test-blizzard2.component';

describe('TestBlizzard2Component', () => {
  let component: TestBlizzard2Component;
  let fixture: ComponentFixture<TestBlizzard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestBlizzard2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBlizzard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
