import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarPlatillosComponent } from './gestionar-platillos.component';

describe('GestionarPlatillosComponent', () => {
  let component: GestionarPlatillosComponent;
  let fixture: ComponentFixture<GestionarPlatillosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionarPlatillosComponent]
    });
    fixture = TestBed.createComponent(GestionarPlatillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
