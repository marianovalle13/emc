import { Component } from '@angular/core';
import { ItemsComponent } from '../../core/items.component';

@Component({
  selector: 'app-umacs',
  templateUrl: './umacs.component.html',
  styleUrls: ['../../core/items.component.scss']
})
export class UmacsComponent extends ItemsComponent {

  //isTheoretical: any;

  getFilters() {
    let _filters = {};
    /* if (this.isTheoretical) {
      _filters["isTheoretical"] = this.isTheoretical;
    } */
    return _filters;
  }

}
