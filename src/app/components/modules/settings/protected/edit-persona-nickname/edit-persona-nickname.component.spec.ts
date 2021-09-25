import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersonaNicknameComponent } from './edit-persona-nickname.component';

describe('EditPersonaNicknameComponent', () => {
  let component: EditPersonaNicknameComponent;
  let fixture: ComponentFixture<EditPersonaNicknameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPersonaNicknameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPersonaNicknameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
