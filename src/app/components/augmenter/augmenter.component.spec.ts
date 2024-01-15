import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AugmenterComponent } from './augmenter.component';

describe('AugmenterComponent', () => {
  let component: AugmenterComponent;
  let fixture: ComponentFixture<AugmenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AugmenterComponent]
    });
    fixture = TestBed.createComponent(AugmenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
