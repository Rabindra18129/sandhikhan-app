import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebexclusiveArchiveComponent } from './webexclusive-archive.component';

describe('WebexclusiveArchiveComponent', () => {
  let component: WebexclusiveArchiveComponent;
  let fixture: ComponentFixture<WebexclusiveArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebexclusiveArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebexclusiveArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
