import { Component } from '@angular/core';
import { ItemsComponent } from '../../core/items.component';

@Component({
  selector: 'app-vehicleBrands',
  templateUrl: './vehicleBrands.component.html',
  styleUrls: ['../../core/items.component.scss']
})
export class VehicleBrandsComponent extends ItemsComponent {

  getFilters() {
    let _filters = {};

    return _filters;
  }

}
