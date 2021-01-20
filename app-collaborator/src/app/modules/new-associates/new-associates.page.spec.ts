import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewAssociatesPage } from './new-associates.page';

describe('NewAssociatesPage', () => {
  let component: NewAssociatesPage;
  let fixture: ComponentFixture<NewAssociatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAssociatesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewAssociatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
