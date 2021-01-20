import { Component } from '@angular/core';
import { ItemsComponent } from '../../core/items.component';

@Component({
  selector: 'app-vehicleInsurances',
  templateUrl: './vehicleInsurances.component.html',
  styleUrls: ['../../core/items.component.scss']
})
export class VehicleInsurancesComponent extends ItemsComponent {

  getFilters() {
    let _filters = {};

    return _filters;
  }

  getFiltersSearch(textSearch) {

    let filtersSearch: any = {
      // Ejemplo búsqueda campos múltiples
      "$or": [
        { "name": { "$regex": textSearch, "$options": "i" } },
        /* { "lastName": { "$regex": textSearch, "$options": "i" } },
        { "dni": textSearch } */
      ]
    };

    return filtersSearch;
  }

}
