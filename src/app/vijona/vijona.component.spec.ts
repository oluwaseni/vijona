import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VijonaComponent } from './vijona.component';

describe('VijonaComponent', () => {
  let component: VijonaComponent;
  let fixture: ComponentFixture<VijonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VijonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VijonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
