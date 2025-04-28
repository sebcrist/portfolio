import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionBOMComponent } from './gestion-bom.component';

describe('GestionBOMComponent', () => {
  let component: GestionBOMComponent;
  let fixture: ComponentFixture<GestionBOMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionBOMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionBOMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
