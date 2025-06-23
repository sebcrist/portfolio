import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSmartComponent } from './testSmart.component';

describe('TestSmartComponent', () => {
  let component: TestSmartComponent;
  let fixture: ComponentFixture<TestSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestSmartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
