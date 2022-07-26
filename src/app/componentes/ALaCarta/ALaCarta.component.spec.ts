/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ALaCartaComponent } from './ALaCarta.component';

describe('ALaCartaComponent', () => {
  let component: ALaCartaComponent;
  let fixture: ComponentFixture<ALaCartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ALaCartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ALaCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
