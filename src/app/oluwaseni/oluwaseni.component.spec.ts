import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OluwaseniComponent } from './oluwaseni.component';

describe('OluwaseniComponent', () => {
  let component: OluwaseniComponent;
  let fixture: ComponentFixture<OluwaseniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OluwaseniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OluwaseniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
