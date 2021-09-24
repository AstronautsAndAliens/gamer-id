import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPersonaInfoComponent } from './basic-persona-info.component';

describe('BasicPersonaInfoComponent', () => {
  let component: BasicPersonaInfoComponent;
  let fixture: ComponentFixture<BasicPersonaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicPersonaInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicPersonaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
