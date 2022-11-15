import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIconBlinkComponent } from './new-icon-blink.component';

describe('NewIconBlinkComponent', () => {
  let component: NewIconBlinkComponent;
  let fixture: ComponentFixture<NewIconBlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewIconBlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIconBlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
