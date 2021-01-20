import { Component } from '@angular/core';
import { ItemsComponent } from '../../core/items.component';

@Component({
  selector: 'app-phcs',
  templateUrl: './phcs.component.html',
  styleUrls: ['../../core/items.component.scss']
})
export class PHCSComponent extends ItemsComponent {

  getFilters() {
    let _filters = {};

    return _filters;
  }

}
