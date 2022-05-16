import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RilesComponent } from './riles.component';

describe('RilesComponent', () => {
  let component: RilesComponent;
  let fixture: ComponentFixture<RilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
