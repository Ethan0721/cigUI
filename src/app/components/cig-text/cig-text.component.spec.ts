import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CigTextComponent } from './cig-text.component';

describe('CigTextComponent', () => {
  let component: CigTextComponent;
  let fixture: ComponentFixture<CigTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CigTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CigTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
