import { Component } from '@angular/core';
import { ItemsComponent } from '../../core/items.component';

@Component({
  selector: 'app-phcps',
  templateUrl: './phcps.component.html',
  styleUrls: ['../../core/items.component.scss']
})
export class PHCPSComponent extends ItemsComponent {

  getFilters() {
    let _filters = {};

    return _filters;
  }

  getPopulates() {
    return ['phc']
  }

}
