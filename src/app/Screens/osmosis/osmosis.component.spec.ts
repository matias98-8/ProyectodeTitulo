import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsmosisComponent } from './osmosis.component';

describe('OsmosisComponent', () => {
  let component: OsmosisComponent;
  let fixture: ComponentFixture<OsmosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsmosisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsmosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
