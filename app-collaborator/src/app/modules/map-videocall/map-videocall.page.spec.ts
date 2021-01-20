import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapVideocallPage } from './map-videocall.page';

describe('MapVideocallPage', () => {
  let component: MapVideocallPage;
  let fixture: ComponentFixture<MapVideocallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapVideocallPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapVideocallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
