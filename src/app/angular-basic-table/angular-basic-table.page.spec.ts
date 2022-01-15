import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AngularBasicTablePage } from './angular-basic-table.page';

describe('AngularBasicTablePage', () => {
  let component: AngularBasicTablePage;
  let fixture: ComponentFixture<AngularBasicTablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularBasicTablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AngularBasicTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
