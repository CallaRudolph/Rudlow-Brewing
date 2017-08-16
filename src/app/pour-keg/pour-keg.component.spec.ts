import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PourKegComponent } from './pour-keg.component';

describe('PourKegComponent', () => {
  let component: PourKegComponent;
  let fixture: ComponentFixture<PourKegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PourKegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PourKegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
