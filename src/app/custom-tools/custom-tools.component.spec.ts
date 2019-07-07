import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomToolsComponent } from './custom-tools.component';

describe('CustomToolsComponent', () => {
  let component: CustomToolsComponent;
  let fixture: ComponentFixture<CustomToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
