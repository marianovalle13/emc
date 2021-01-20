import { Component } from '@angular/core';
import { ItemsComponent } from '../../core/items.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['../../core/items.component.scss']
})
export class CoursesComponent extends ItemsComponent {

  type: any;

  getFilters() {
    let _filters = {};

    if (this.type) {
      _filters['type'] = this.type;
    }

    /*     if (this.type == 'Teórico') _filters['type'] = 'Teórico';
        else if (this.type == 'Presencial') _filters['type'] = 'Presencial'; */

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
