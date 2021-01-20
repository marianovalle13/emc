import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicinesSuppliesAddPage } from './medicines-supplies-add.page';

describe('MedicinesSuppliesAddPage', () => {
  let component: MedicinesSuppliesAddPage;
  let fixture: ComponentFixture<MedicinesSuppliesAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinesSuppliesAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicinesSuppliesAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
