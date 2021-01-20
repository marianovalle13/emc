import { Component } from '@angular/core';
import { ItemsComponent } from '../../core/items.component';

@Component({
  selector: 'app-vehicleModels',
  templateUrl: './vehicleModels.component.html',
  styleUrls: ['../../core/items.component.scss']
})
export class VehicleModelsComponent extends ItemsComponent {

  getFilters() {
    let _filters = {};

    return _filters;
  }

  getPopulates(){
    return ['vehicleBrand']
  }

}
