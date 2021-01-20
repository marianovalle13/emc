import { Component } from '@angular/core';
import { ItemsComponent } from '../../core/items.component';

@Component({
  selector: 'app-administrators',
  templateUrl: './administrators.component.html',
  styleUrls: ['../../core/items.component.scss']
})
export class AdministratorsComponent extends ItemsComponent {

  getSort() {
    return { user: 0 };
  }

}
