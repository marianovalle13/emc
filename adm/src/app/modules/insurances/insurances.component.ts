import { Component } from '@angular/core';
import { ItemsComponent } from '../../core/items.component';

@Component({
  selector: 'app-insurances',
  templateUrl: './insurances.component.html',
  styleUrls: ['../../core/items.component.scss']
})
export class InsurancesComponent extends ItemsComponent {

  getFilters() {
    let _filters = {};

    return _filters;
  }

}
