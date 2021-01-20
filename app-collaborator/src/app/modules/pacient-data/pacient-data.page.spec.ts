import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacientDataPage } from './pacient-data.page';

describe('PacientDataPage', () => {
  let component: PacientDataPage;
  let fixture: ComponentFixture<PacientDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacientDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
