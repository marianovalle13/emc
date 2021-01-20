import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicinesSuppliesPage } from './medicines-supplies.page';

describe('MedicinesSuppliesPage', () => {
  let component: MedicinesSuppliesPage;
  let fixture: ComponentFixture<MedicinesSuppliesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinesSuppliesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicinesSuppliesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
