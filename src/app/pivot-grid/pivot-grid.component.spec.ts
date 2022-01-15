import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PivotGridComponent } from './pivot-grid.component';

describe('PivotGridComponent', () => {
  let component: PivotGridComponent;
  let fixture: ComponentFixture<PivotGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PivotGridComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PivotGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
