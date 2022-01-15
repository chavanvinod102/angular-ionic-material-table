import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderImageComponent } from './order-image.component';

describe('OrderImageComponent', () => {
  let component: OrderImageComponent;
  let fixture: ComponentFixture<OrderImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderImageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
