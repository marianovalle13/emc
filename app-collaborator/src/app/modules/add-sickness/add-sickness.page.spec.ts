import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddSicknessPage } from './add-sickness.page';

describe('AddSicknessPage', () => {
  let component: AddSicknessPage;
  let fixture: ComponentFixture<AddSicknessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSicknessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddSicknessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
