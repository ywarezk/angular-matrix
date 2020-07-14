import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintHelloComponent } from './print-hello.component';

describe('PrintHelloComponent', () => {
  let component: PrintHelloComponent;
  let fixture: ComponentFixture<PrintHelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintHelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
