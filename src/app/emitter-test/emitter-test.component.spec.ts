import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitterTestComponent } from './emitter-test.component';

describe('EmitterTestComponent', () => {
  let component: EmitterTestComponent;
  let fixture: ComponentFixture<EmitterTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmitterTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmitterTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
