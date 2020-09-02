import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueArchiveComponent } from './issue-archive.component';

describe('IssueArchiveComponent', () => {
  let component: IssueArchiveComponent;
  let fixture: ComponentFixture<IssueArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
