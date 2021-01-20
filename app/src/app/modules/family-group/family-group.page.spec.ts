import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FamilyGroupPage } from './family-group.page';

describe('FamilyGroupPage', () => {
  let component: FamilyGroupPage;
  let fixture: ComponentFixture<FamilyGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyGroupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FamilyGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
