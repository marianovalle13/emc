import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinishServicePage } from './finish-service.page';

describe('FinishServicePage', () => {
  let component: FinishServicePage;
  let fixture: ComponentFixture<FinishServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishServicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinishServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
