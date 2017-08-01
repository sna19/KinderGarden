import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPropertiesComponent } from './child-properties.component';

describe('ChildPropertiesComponent', () => {
  let component: ChildPropertiesComponent;
  let fixture: ComponentFixture<ChildPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
