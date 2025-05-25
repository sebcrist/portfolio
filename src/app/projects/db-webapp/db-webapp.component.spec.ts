import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbWebappComponent } from './db-webapp.component';

describe('DbWebappComponent', () => {
  let component: DbWebappComponent;
  let fixture: ComponentFixture<DbWebappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbWebappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbWebappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
