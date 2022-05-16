import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosMultimediaComponent } from './filtros-multimedia.component';

describe('FiltrosMultimediaComponent', () => {
  let component: FiltrosMultimediaComponent;
  let fixture: ComponentFixture<FiltrosMultimediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrosMultimediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
