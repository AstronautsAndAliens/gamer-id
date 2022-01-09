import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSteamIdComponent } from './edit-steam-id.component';

describe('EditSteamIdComponent', () => {
  let component: EditSteamIdComponent;
  let fixture: ComponentFixture<EditSteamIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSteamIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSteamIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
