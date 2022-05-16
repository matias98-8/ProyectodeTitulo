import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltrafiltracionComponent } from './ultrafiltracion.component';

describe('UltrafiltracionComponent', () => {
  let component: UltrafiltracionComponent;
  let fixture: ComponentFixture<UltrafiltracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltrafiltracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltrafiltracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
