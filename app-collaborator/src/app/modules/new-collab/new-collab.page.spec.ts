import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewCollabPage } from './new-collab.page';

describe('NewCollabPage', () => {
  let component: NewCollabPage;
  let fixture: ComponentFixture<NewCollabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCollabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewCollabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
