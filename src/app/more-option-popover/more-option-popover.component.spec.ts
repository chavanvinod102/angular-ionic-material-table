import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoreOptionPopoverComponent } from './more-option-popover.component';

describe('MoreOptionPopoverComponent', () => {
  let component: MoreOptionPopoverComponent;
  let fixture: ComponentFixture<MoreOptionPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreOptionPopoverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoreOptionPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
