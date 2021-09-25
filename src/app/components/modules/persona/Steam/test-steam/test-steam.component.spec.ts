import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSteamComponent } from './test-steam.component';

describe('TestSteamComponent', () => {
  let component: TestSteamComponent;
  let fixture: ComponentFixture<TestSteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSteamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
