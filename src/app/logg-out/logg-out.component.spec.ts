import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggOutComponent } from './logg-out.component';

describe('LoggOutComponent', () => {
  let component: LoggOutComponent;
  let fixture: ComponentFixture<LoggOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoggOutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
