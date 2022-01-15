import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GridOrderStatusComponent } from './grid-order-status.component';

describe('GridOrderStatusComponent', () => {
  let component: GridOrderStatusComponent;
  let fixture: ComponentFixture<GridOrderStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridOrderStatusComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GridOrderStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
