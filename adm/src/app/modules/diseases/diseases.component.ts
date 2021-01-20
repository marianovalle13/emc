import { Component } from '@angular/core';
import { ItemsComponent } from '../../core/items.component';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['../../core/items.component.scss']
})
export class DiseasesComponent extends ItemsComponent {

  getFilters() {
    let _filters = {};

    return _filters;
  }

}
