import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasyRPGComponent } from './fantasy-rpg.component';

describe('FantasyRPGComponent', () => {
  let component: FantasyRPGComponent;
  let fixture: ComponentFixture<FantasyRPGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FantasyRPGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FantasyRPGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
