import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilleproduitComponent } from './familleproduit.component';

describe('FamilleproduitComponent', () => {
  let component: FamilleproduitComponent;
  let fixture: ComponentFixture<FamilleproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilleproduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilleproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
