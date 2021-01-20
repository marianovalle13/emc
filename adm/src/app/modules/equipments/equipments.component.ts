import { Component } from '@angular/core';
import { ItemsComponent } from '../../core/items.component';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['../../core/items.component.scss']
})
export class EquipmentsComponent extends ItemsComponent {

  getFilters() {
    let _filters = {};

    return _filters;
  }

}
