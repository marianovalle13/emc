import { Component } from '@angular/core';
import { ItemsComponent } from '../../core/items.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['../../core/items.component.scss']
})
export class NewsComponent extends ItemsComponent {

  getFilters() {
    let _filters = {};
    return _filters;
  }

}
