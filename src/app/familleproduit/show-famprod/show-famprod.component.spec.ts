import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFamprodComponent } from './show-famprod.component';

describe('ShowFamprodComponent', () => {
  let component: ShowFamprodComponent;
  let fixture: ComponentFixture<ShowFamprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFamprodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFamprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
