import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CkplayerDemoComponent } from './ckplayer-demo.component';

describe('CkplayerDemoComponent', () => {
  let component: CkplayerDemoComponent;
  let fixture: ComponentFixture<CkplayerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CkplayerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CkplayerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
