import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchecComponent } from './echec.component';

describe('EchecComponent', () => {
  let component: EchecComponent;
  let fixture: ComponentFixture<EchecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EchecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
