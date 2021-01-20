import { Component } from '@angular/core';
import { ItemsComponent } from '../../core/items.component';

@Component({
  selector: 'app-vehicleTypes',
  templateUrl: './vehicleTypes.component.html',
  styleUrls: ['../../core/items.component.scss']
})
export class VehicleTypesComponent extends ItemsComponent {

  getFilters() {
    let _filters = {};

    return _filters;
  }

}
