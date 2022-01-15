import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GridPivotComponent } from './grid-pivot.component';

describe('NotificationComponent', () => {
  let component: GridPivotComponent;
  let fixture: ComponentFixture<GridPivotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPivotComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GridPivotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
