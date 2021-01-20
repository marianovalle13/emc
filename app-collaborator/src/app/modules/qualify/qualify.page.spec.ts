import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QualifyPage } from './qualify.page';

describe('QualifyPage', () => {
  let component: QualifyPage;
  let fixture: ComponentFixture<QualifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualifyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QualifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
