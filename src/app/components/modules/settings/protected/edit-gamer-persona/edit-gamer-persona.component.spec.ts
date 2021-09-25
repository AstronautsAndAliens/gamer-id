import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGamerPersonaComponent } from './edit-gamer-persona.component';

describe('EditGamerPersonaComponent', () => {
  let component: EditGamerPersonaComponent;
  let fixture: ComponentFixture<EditGamerPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGamerPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGamerPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
