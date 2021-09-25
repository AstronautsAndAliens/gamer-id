import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBlizzard1Component } from './test-blizzard1.component';

describe('TestBlizzard1Component', () => {
  let component: TestBlizzard1Component;
  let fixture: ComponentFixture<TestBlizzard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestBlizzard1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBlizzard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
